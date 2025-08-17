import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GestionSchoolService } from 'src/app/services/SchoolManagement/gestion-school.service';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css']
})
export class CausesComponent {
  school: any[] = [];
  constructor(private schoolService: GestionSchoolService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllSchool();
  }

  getAllSchool(): void {
    this.schoolService.getAllSchool().subscribe(
      (data: any) => {
        const formattedSchools = data.schoolsWithAmbassadors.map((schoolWithAmbassadors: any) => {
          const formattedAmbassadors = schoolWithAmbassadors.ambassadors.map((ambassador: any) => {
            return { ...ambassador, };
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

  private formatDate(date: string): string {
    return this.datePipe.transform(new Date(date), 'dd-MM-yyyy HH:mm') || '';
  }
}
