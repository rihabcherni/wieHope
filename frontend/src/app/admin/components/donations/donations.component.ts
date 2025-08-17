import { Component, OnInit } from '@angular/core';
import { GestionDonationService } from '../../../services/DonationManagement/gestion-donation.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  donation: any[] = [];
  constructor(private donationService: GestionDonationService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllDonations();
  }

  getAllDonations(): void {
    this.donationService.getAllDonations().subscribe(
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
