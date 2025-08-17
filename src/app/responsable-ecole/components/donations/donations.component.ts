import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthServicesService } from 'src/app/auth/services/auth-services.service';
import { GestionDonationService } from 'src/app/services/DonationManagement/gestion-donation.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {
  donation: any[] = [];
  constructor(private donationService: GestionDonationService, private authService: AuthServicesService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllDonationsBySchool();
  }

  getAllDonationsBySchool(): void {
    const school = this.authService.getSchoolId() || "";
    this.donationService.getAllDonationsBySchool(school).subscribe(
      (data: any) => {
        const formattedDonations = data.data.map((donation: any) => {
          return { ...donation, formattedDate: this.formatDate(donation.dateDonation) };
        });
        this.donation = formattedDonations;
      },
      (error: any) => {
        console.error('Error fetching donations:', error);
      }
    );
  }

  private formatDate(date: string): string {
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy HH:mm') || '';
  }
}
