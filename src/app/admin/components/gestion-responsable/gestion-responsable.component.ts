import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GestionAmbassadorService } from 'src/app/services/AmbassadorManagement/gestion-ambassador.service';

@Component({
  selector: 'app-gestion-responsable',
  templateUrl: './gestion-responsable.component.html',
  styleUrls: ['./gestion-responsable.component.css']
})
export class GestionResponsableComponent {
  ambassador: any[] = [];
  constructor(private ambassadorService: GestionAmbassadorService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllAmbassador();
  }

  getAllAmbassador(): void {
    this.ambassadorService.getAllAmbassador().subscribe(
      (data: any) => {
        const ambassadorSchoolPairs = data.ambassadorSchoolPairs || [];
        this.ambassador = ambassadorSchoolPairs.map((pair: any) => {
          return { ...pair.ambassador, school: pair.school };
        });
      },
      (error: any) => {
        console.error('Error fetching ambassadors:', error);
      }
    );
  }


  private formatDate(date: string): string {
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy HH:mm') || '';
  }
  deleteAmbassador(id: string): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this ambassador?');

    if (isConfirmed) {
      this.ambassadorService.deleteAmbassador(id).subscribe(
        () => {
          alert('ambassador deleted successfully');
          this.getAllAmbassador();
        },
        (error: any) => {
          console.error(`Error deleting ambassador with ID ${id}:`, error);
          alert(`Error deleting ambassador with ID ${id}`);
        }
      );
    }
  }

  selectedAmbassadorSchool: any;
  onNoClick(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  openDetailsDialog(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'flex';
    }
  }

  onNoClickConfirm(): void {
    const modal = document.getElementById('modalConf');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  openDetailsDialogConfirm(): void {
    const modal = document.getElementById('modalConf');
    if (modal) {
      modal.style.display = 'flex';
    }
  }
  openDetailsModal(school: any): void {
    this.selectedAmbassadorSchool = school;
    this.openDetailsDialog();
  }
  confirmeAmbassador(school: any): void {
    this.selectedAmbassadorSchool = school;
    this.openDetailsDialogConfirm();
  }
  confirmationIcon(d: any): string {
    return d.confirmation ? '<i class="fa fa-check"></i>' : '<i class="fa fa-times"></i>';
  }
  confirmationText(d: any): string {
    return d.confirmation ?
      '<p>Ambassador already confirmed</p>' :
      `<p>If you want to confirm this ambassador: ${d.firstName} you must confirm the school: ${d.school.name}</p>`+
      `<a href='/admin/schools'>Go To this link</a>`;
  }
}
