import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SuccessLoginMessageService } from 'src/app/auth/services/success-login-message.service';
import { AdminDashService } from 'src/app/services/dashboard/admin-dash.service';
import { GestionDonationService } from 'src/app/services/DonationManagement/gestion-donation.service';
import { AuthServicesService } from 'src/app/auth/services/auth-services.service';
import { AmbassadorDashService } from 'src/app/services/dashboard/ambassador-dash.service';

@Component({
  selector: 'app-dashboard-responsable',
  templateUrl: './dashboard-responsable.component.html',
  styleUrls: ['./dashboard-responsable.component.css']
})
export class DashboardResponsableComponent {
  statistics: any = {};
  schoolStatistics: any = [];
  lastDonation: any = [];
  lastDonor: any = [];
  donationStatistics: any = [];
  successMessage: string = '';
  lineChartData: any = {};
  donation: any[] = [];
  uniqueDonors: any[] = [];

  constructor(private donationService: GestionDonationService, private authService: AuthServicesService, private successMessageService: SuccessLoginMessageService,private statisticsService: AmbassadorDashService, private datePipe: DatePipe) {
    this.successMessageService.successMessage$.subscribe((message) => {
      this.successMessage = message;
    });
  }
  ngOnInit() {

    this.getlastDonationsBySchool();

    this.getStatisticsAmbassador();



  }

  getStatisticsAmbassador() {

    this.statisticsService.getStatisticsAmbassador(this.authService.getSchoolId() || "").subscribe(
      (data) => {
        this.statistics = data.data;
      },
      (error) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }


  // getStatistics() {
  //   this.statisticsService.getStatistics().subscribe(
  //     (data) => {
  //       this.statistics = data.data;
  //     },
  //     (error) => {
  //       console.error('Error fetching statistics:', error);
  //     }
  //   );
  // }
  // getlastDonationAdmin() {
  //   this.statisticsService.getlastDonationAdmin().subscribe(
  //     (data) => {
  //       const formattedDonations =(Array.isArray(data) ? data : []).map((donation: any) => {
  //         return { ...donation, dateDonation: this.formatDate(donation.dateDonation) };
  //       });
  //       this.lastDonation = formattedDonations;
  //     },
  //     (error) => {
  //       console.error('Error fetching statistics:', error);
  //     }
  //   );
  // }
  // getlastDonorAdmin() {
  //   this.statisticsService.getlastDonorAdmin().subscribe(
  //     (data) => {
  //       const formattedDonors =(Array.isArray(data) ? data : []).map((donor: any) => {
  //         return { ...donor, timeAdded: this.formatDate(donor.timeAdded) };
  //       });
  //       this.lastDonor = formattedDonors;
  //     },
  //     (error) => {
  //       console.error('Error fetching statistics:', error);
  //     }
  //   );
  // }

  getlastDonationsBySchool(): void {
    const school = this.authService.getSchoolId() || "";
    this.donationService.getAllDonationsBySchool(school).subscribe(
      (data: any) => {
        const formattedDonations = data.data.map((donation: any) => {
          return { ...donation, formattedDate: this.formatDate(donation.dateDonation) };
        });
        this.donation = formattedDonations;
        this.uniqueDonors = this.getUniqueDonors(this.donation); // Appel à getUniqueDonors ici
      },
      (error: any) => {
        console.error('Error fetching donations:', error);
      }
    );
  }

  getUniqueDonors(donations: any[]): any[] {
    const uniqueDonors: any[] = [];
    const donorIds: string[] = [];

    donations.forEach((donation) => {
      const donorId = donation.donor._id;

      if (!donorIds.includes(donorId)) {
        donorIds.push(donorId);
        uniqueDonors.push(donation);
      }
    });


    return uniqueDonors;

  }



  private formatDate(date: string): string {
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy HH:mm') || '';
  }


}
