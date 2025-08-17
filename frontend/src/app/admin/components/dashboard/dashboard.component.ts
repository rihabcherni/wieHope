import { Component, Renderer2, ElementRef ,OnInit,ViewChild} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SuccessLoginMessageService } from '../../../auth/services/success-login-message.service'; // Adjust the path
import { AdminDashService } from '../../../services/dashboard/admin-dash.service';
import { DatePipe } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  statistics: any = {};
  schoolStatistics: any = [];
  lastDonation: any = [];
  lastDonor: any = [];
  donationStatistics: any = [];
  successMessage: string = '';
  lineChartData: any = {};
  lastSchool: any = [];
  showSuccessMessage: boolean = false;

  constructor(private successMessageService: SuccessLoginMessageService,private statisticsService: AdminDashService, private datePipe: DatePipe) {
    this.successMessageService.successMessage$.subscribe((message) => {
      this.successMessage = message;
    });
  }
  ngOnInit() {
    this.getStatistics();
    this.getSchoolStatisticsByYear();
    this.getDonationStatisticsByYear();
    this.getlastDonationAdmin();
    this.getlastDonorAdmin();
    this.getlastSchoolDonor();
  }
  createChart() {
    const labels = this.schoolStatistics.map((stat: any) => stat.year);
    const data = this.schoolStatistics.map((stat: any) => stat.numberOfSchools);
    const lineChartData = {
      labels: labels,
      datasets: [{
        label: 'School',
        data: data,
        backgroundColor: '#971A82',
        borderColor: '#A036A3',
        fill: false,
      }]
    };

     new Chart('statisticsLineChart', {
      type: 'line',
      data: lineChartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1 as number
            }
          }
        },
        plugins: {
          title: {
              display: true,
              text: 'Number of Schools Over Years',
              font: {
                size: 16
              },
              color: '#971A82',
          }
      }
      }
    });
  }
  createChartDonation() {
    const labels = this.donationStatistics.map((stat: any) => stat.year);
    const data = this.donationStatistics.map((stat: any) => stat.numberOfDonations);
    const lineChartData = {
      labels: labels,
      datasets: [{
        label: 'Donation',
        data: data,
        backgroundColor: '#01b5b2',
        borderColor: '#365CA3',
        fill: false,
      }]
    };

     new Chart('statisticsBarChartDonation', {
      type: 'bar',
      data: lineChartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1 as number
            }
          }
        },
        plugins: {
          title: {
              display: true,
              text: 'Number of Donation Over Years',
              font: {
                size: 16
              },
              color: '#01b5b2',
          }
        }
      },
    });
  }

  getStatistics() {
    this.statisticsService.getStatistics().subscribe(
      (data) => {
        this.statistics = data.data;
      },
      (error) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }
  getSchoolStatisticsByYear() {
    this.statisticsService.getSchoolStatisticsByYear().subscribe(
      (data) => {
        this.schoolStatistics = Array.isArray(data.data) ? data.data : [];
        setTimeout(() => {
          this.createChart();
        }, 500);
      },
      (error) => {
        console.error('Error fetching school statistics by year:', error);
      }
    );
  }
  getDonationStatisticsByYear(){
    this.statisticsService.getDonationStatisticsByYear().subscribe(
      (data) => {
        this.donationStatistics = Array.isArray(data.data) ? data.data : [];
        setTimeout(() => {
          this.createChartDonation();
        }, 500);
      },
      (error) => {
        console.error('Error fetching donation statistics by year:', error);
      }
    );
  }
  getlastDonationAdmin() {
    this.statisticsService.getlastDonationAdmin().subscribe(
      (data) => {
        const formattedDonations =(Array.isArray(data) ? data : []).map((donation: any) => {
          return { ...donation, dateDonation: this.formatDate(donation.dateDonation) };
        });
        this.lastDonation = formattedDonations;
      },
      (error) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }
  getlastDonorAdmin() {
    this.statisticsService.getlastDonorAdmin().subscribe(
      (data) => {
        const formattedDonors =(Array.isArray(data) ? data : []).map((donor: any) => {
          return { ...donor, timeAdded: this.formatDate(donor.timeAdded) };
        });
        this.lastDonor = formattedDonors;
      },
      (error) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }
  getlastSchoolDonor() {
    this.statisticsService.getlastSchoolDonor().subscribe(
      (data) => {
        const formattedSchools =(Array.isArray(data) ? data : []).map((School: any) => {
          return { ...School, dateConfirmation: this.formatDate(School.dateConfirmation) };
        });
        this.lastSchool = formattedSchools;
      },
      (error) => {
        this.successMessageService.showSuccessMessage(`Error fetching statistics schools: ${error}`);
      }
    );
  }
  private formatDate(date: string): string {
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy HH:mm') || '';
  }
}
