import { Component, OnInit } from '@angular/core';
import { GestionDonationService } from '../../../services/DonationManagement/gestion-donation.service';
import { DatePipe } from '@angular/common';
import { AuthServicesService } from 'src/app/auth/services/auth-services.service';
@Component({
  selector: 'app-historique-dons',
  templateUrl: './historique-dons.component.html',
  styleUrls: ['./historique-dons.component.css']
})
export class HistoriqueDonsComponent {
  donation: any[] = [];
  constructor(private donationService: GestionDonationService, private authService: AuthServicesService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllDonationsByDonor();
  }

  getAllDonationsByDonor(): void {
    const donorId = this.authService.getUserId() || "";
    this.donationService.getAllDonationsByDonor(donorId).subscribe(
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
