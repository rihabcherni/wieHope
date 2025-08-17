import { Component } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';
import { SuccessLoginMessageService } from '../../services/success-login-message.service';
import { GestionAmbassadorService } from 'src/app/services/AmbassadorManagement/gestion-ambassador.service';
import { GestionSchoolService } from 'src/app/services/SchoolManagement/gestion-school.service';

@Component({
  selector: 'app-be-ambassador',
  templateUrl: './be-ambassador.component.html',
  styleUrls: ['./be-ambassador.component.css']
})
export class BeAmbassadorComponent {
  selectedType: string = '';
  onDropdownItemClick(selectedValue: string): void {
    this.selectedType = selectedValue;
  }
  currentStep = 1;
  school: any = {image: null};
  user: any = { photo: null };
  link:string ='';
  school_id: any ;
  successMessage: string = '';
  showSuccessMessage: boolean = false;
  constructor(
    private ambassadorService: GestionAmbassadorService ,private schoolService: GestionSchoolService, private authService: AuthServicesService, private router: Router,
    private successMessageService: SuccessLoginMessageService
  ) {
    this.successMessageService.successMessage$.subscribe((message) => {
      this.showSuccessSnackbar(message);
    });
  }
  getLinkLogin():void {
    if(this.authService.getRole()=="Admin"){
      this.link ="/admin"
    }else if(this.authService.getRole()=="Donor"){
      this.link ="/donor"
    }else if(this.authService.getRole()=="Ambassador"){
      this.link ="/ambassador"
    }
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            if (this.currentStep === 2) {
                this.user.photo = file;
            } else if (this.currentStep === 1) {
                this.school.image = file;
            }
        };
        reader.readAsDataURL(file);
    }
}

  onSubmit() {
    if (this.currentStep === 1) {
      const formData1 = new FormData();
      formData1.append('image', this.school.image);
      formData1.append('name', this.school.name);
      formData1.append('niveau', this.school.niveau);
      formData1.append('address', this.school.address);
      formData1.append('governorate', this.school.governorate);
      formData1.append('nbr_student', this.school.nbr_student);
      formData1.append('nbr_teachers', this.school.nbr_teachers);
      formData1.append('nbr_classes', this.school.nbr_classes);
      formData1.append('type_needs', this.school.type_needs);
      formData1.append('needs', this.school.needs);
      this.schoolService.addSchool(formData1).subscribe(
        (response) => {
          const school = response.school;
          this.authService.setSchool(school);
          const schoolReference = this.authService.getSchool() as {
            _id: string
          } | null;

          if (schoolReference) {
            if ('_id' in schoolReference) {
              this.school_id = schoolReference._id;
            } else {
              console.error('school object is missing id property');
            }
          } else {
            console.error('school object is null');
          }
          this.successMessageService.showSuccessMessage(`School ${school?.name} added successful `);
          this.currentStep = 2;
        },
        (error) => {
          console.error('Error adding school:', error);
        }
      );
    } else if (this.currentStep === 2) {
      const formData = new FormData();
      formData.append('photo', this.user.photo);
      formData.append('gender', this.user.gender);
      formData.append('firstName', this.user.firstName);
      formData.append('lastName', this.user.lastName);
      formData.append('email', this.user.email);
      formData.append('password', this.user.password);
      formData.append('address', this.user.address);
      formData.append('phoneNumber', this.user.phoneNumber);
      formData.append('governorate', this.user.governorate);
      formData.append('title', this.user.title);
      formData.append('ReferencedSchool', this.school_id);
      this.ambassadorService.addAmbassador(formData).subscribe(
        (response) => {
          const token = response.token;
          const role = response.role;
          const user = response.newAmbassador;
          this.authService.setToken(token);
          this.authService.setRole(role);
          this.authService.setUser(user);
          this.successMessageService.showSuccessMessage(`Register successfuly ${role}: ${user?.firstName} ${user?.lastName}`);
          setTimeout(() => {
           this.getLinkLogin();
           this.router.navigate([this.link]);
          }, 6000);
        },
        (error) => {
          console.error('Error adding Ambassador:', error);
        }
      );
    }
  }

  showSuccessSnackbar(message: string): void {
    this.successMessage = message;
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }
}

