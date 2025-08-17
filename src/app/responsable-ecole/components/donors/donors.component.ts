import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GestionDonorService } from 'src/app/services/DonorManagement/gestion-donor.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent {
  donor: any[] = [];
  constructor(private donorService: GestionDonorService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllDonor();
  }

  getAllDonor(): void {
    this.donorService.getAllDonor().subscribe(
      (data: any) => {
        const formattedDonors = data.data.map((donor: any) => {
          return { ...donor, timeAdded: this.formatDate(donor.timeAdded) };
        });
        this.donor = formattedDonors;
      },
      (error: any) => {
        console.error('Error fetching Donors:', error);
      }
    );
  }

  private formatDate(date: string): string {
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy HH:mm') || '';
  }
}
