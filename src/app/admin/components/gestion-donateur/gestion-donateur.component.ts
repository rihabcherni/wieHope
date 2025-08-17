import { Component } from '@angular/core';
import { GestionDonorService } from '../../../services/DonorManagement/gestion-donor.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestion-donateur',
  templateUrl: './gestion-donateur.component.html',
  styleUrls: ['./gestion-donateur.component.css']
})
export class GestionDonateurComponent {
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
  deleteDonor(id: string): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this donor?');

    if (isConfirmed) {
      this.donorService.deleteDonor(id).subscribe(
        () => {
          alert('Donor deleted successfully');
          this.getAllDonor();
        },
        (error: any) => {
          console.error(`Error deleting donor with ID ${id}:`, error);
          alert(`Error deleting donor with ID ${id}`);
        }
      );
    }
  }
}
