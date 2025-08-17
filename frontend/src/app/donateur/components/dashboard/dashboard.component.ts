import { Component} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SuccessLoginMessageService } from '../../../auth/services/success-login-message.service';
import { AuthServicesService } from '../../../auth/services/auth-services.service';
import { DonorDashService } from '../../../services/dashboard/donor-dash.service';
import { DatePipe } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  statistics: any = {};
  schoolStatistics: any = [];
  lastDonation: any = [];
  lastSchool: any = [];
  donationStatistics: any = [];
  successMessage: string = '';
  lineChartData: any = {};

  constructor(private successMessageService: SuccessLoginMessageService,private statisticsService: DonorDashService, private authService: AuthServicesService, private datePipe: DatePipe) {
    this.successMessageService.successMessage$.subscribe((message) => {
      this.successMessage = message;
    });
  }
  ngOnInit() {
    this.getStatistics(this.authService.getUserId() || "");
    this.getDonationStatisticsByYearDonor(this.authService.getUserId() || "");
    this.getlastDonationDonor(this.authService.getUserId() || "");
    this.getlastSchoolDonor();
  }
  createChartDonation() {
    const labels = this.donationStatistics.map((stat: any) => stat.year);
    const data = this.donationStatistics.map((stat: any) => stat.numberOfDonations);
    const lineChartData = {
      labels: labels,
      datasets: [{
        label: 'Donation',
        data: data,
        backgroundColor: '#6401B5',
        borderColor: '#40096D',
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
  getStatistics(DonorId: string) {
    this.statisticsService.getStatistics(DonorId).subscribe(
      (data) => {
        this.statistics = data.data;
      },
      (error) => {
        this.successMessageService.showSuccessMessage(`Error fetching statistics: ${error}`);
      }
    );
  }
  getDonationStatisticsByYearDonor(DonorId: string){
    this.statisticsService.getDonationStatisticsByYearDonor(DonorId).subscribe(
      (data) => {
        this.donationStatistics = Array.isArray(data.data) ? data.data : [];
        setTimeout(() => {
          this.createChartDonation();
        }, 500);
      },
      (error) => {
        this.successMessageService.showSuccessMessage(`Error fetching donation statistics by year: ${error}`);
      }
    );
  }
  getlastDonationDonor(DonorId: string) {
    this.statisticsService.getlastDonationDonor(DonorId).subscribe(
      (data) => {
        const formattedDonations =(Array.isArray(data) ? data : []).map((donation: any) => {
          return { ...donation, dateDonation: this.formatDate(donation.dateDonation) };
        });
        this.lastDonation = formattedDonations;
      },
      (error) => {
        this.successMessageService.showSuccessMessage(`Error fetching statistics donors: ${error}`);
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
