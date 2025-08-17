import { Component } from '@angular/core';
import { GestionSchoolService } from '../../../services/SchoolManagement/gestion-school.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-liste-besoins',
  templateUrl: './liste-besoins.component.html',
  styleUrls: ['./liste-besoins.component.css']
})
export class ListeBesoinsComponent {
  school: any[] = [];
  demande: any[] = [];
  constructor(private schoolService: GestionSchoolService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllSchool();
    this.getAllSchoolsDemande();
  }

  getAllSchool(): void {
    this.schoolService.getAllSchool().subscribe(
      (data: any) => {
        const formattedSchools = data.schoolsWithAmbassadors.map((schoolWithAmbassadors: any) => {
          const formattedAmbassadors = schoolWithAmbassadors.ambassadors.map((ambassador: any) => {
            return { ...ambassador, /* Ajoutez ici d'autres propriétés si nécessaire */ };
          });

          return {
            ...schoolWithAmbassadors.school,
            dateConfirmation: this.formatDate(schoolWithAmbassadors.school.dateConfirmation),
            ambassadors: formattedAmbassadors,
          };
        });

        this.school = formattedSchools;
      },
      (error: any) => {
        console.error('Error fetching schools:', error);
      }
    );
  }

  getAllSchoolsDemande(): void {
    this.schoolService.getAllSchoolsDemande().subscribe(
      (data: any) => {
        const formattedSchools = data.schoolsWithAmbassadors.map((schoolWithAmbassadors: any) => {
          const formattedAmbassadors = schoolWithAmbassadors.ambassadors.map((ambassador: any) => {
            return { ...ambassador, /* Ajoutez ici d'autres propriétés si nécessaire */ };
          });
          return {
            ...schoolWithAmbassadors.school,
            dateConfirmation: this.formatDate(schoolWithAmbassadors.school.dateConfirmation),
            ambassadors: formattedAmbassadors,
          };
        });
        this.demande = formattedSchools;
      },
      (error: any) => {
        console.error('Error fetching schools:', error);
      }
    );
  }
  private formatDate(date: string): string {
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy HH:mm') || '';
  }
  deleteSchool(id: string): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this school?');

    if (isConfirmed) {
      this.schoolService.deleteSchool(id).subscribe(
        () => {
          alert('school deleted successfully');
          this.getAllSchool();
        },
        (error: any) => {
          console.error(`Error deleting school with ID ${id}:`, error);
          alert(`Error deleting school with ID ${id}`);
        }
      );
    }
  }

  selectedSchool: any;
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
  openDetailsModal(school: any): void {
    this.selectedSchool = school;
    this.openDetailsDialog();
  }


  selectedSchool3 = {
    name: '',
    address: '',
    governorate: '',
    nbr_student: 0,
    nbr_teachers: 0,
    type_needs: '',
    needs: ''
  };
  onNoClick2(): void {
    const modal = document.getElementById('modal2');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  openDetailsDialog2(): void {
    const modal = document.getElementById('modal2');
    if (modal) {
      modal.style.display = 'flex';
    }
  }
  openDetailsModal2(school: any): void {
    this.openDetailsDialog2();
  }


  openDetailsDialog3(): void {
    const modal = document.getElementById('modal3');
    if (modal) {
      modal.style.display = 'flex';
    }
  }

  openDetailsModal3(): void {
    this.openDetailsDialog3();
  }
  onNoClick3(): void {
    const modal = document.getElementById('modal3');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  onSubmit() {
    this.resetForm();
  }
  resetForm() {
    this.selectedSchool3 = {
      name: '',
      address: '',
      governorate: '',
      nbr_student: 0,
      nbr_teachers: 0,
      type_needs: '',
      needs: ''
    };
  }
}





