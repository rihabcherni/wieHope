import { Component } from '@angular/core';
import { GestionDonorService } from 'src/app/services/DonorManagement/gestion-donor.service';
import { SuccessLoginMessageService } from '../../services/success-login-message.service';
import { Router } from '@angular/router';
import { AuthServicesService } from '../../services/auth-services.service';

@Component({
  selector: 'app-be-donor',
  templateUrl: './be-donor.component.html',
  styleUrls: ['./be-donor.component.css']
})
export class BeDonorComponent {
  selectedType: string = '';

  onDropdownItemClick(selectedValue: string): void {
    this.selectedType = selectedValue;
  }
  user: any = { photo: null };
  email: string = '';
  password: string = '';
  link:string ='';
  successMessage: string = '';
  showSuccessMessage: boolean = false;
  constructor(
    private donorService: GestionDonorService, private authService: AuthServicesService, private router: Router,
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
        this.user.photo = file;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
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
    this.donorService.addDonor(formData).subscribe(
      (response) => {
        const token = response.token;
        const role = response.role;
        const user = response.newDonor;
        this.authService.setToken(token);
        this.authService.setRole(role);
        this.authService.setUser(user);
        this.successMessageService.showSuccessMessage(`Register successful ${role}: ${user?.firstName} ${user?.lastName}`);
        setTimeout(() => {
         this.getLinkLogin();
         this.router.navigate([this.link]);
        }, 6000);
      },
      (error) => {
        console.error('Error adding donor:', error);
      }
    );
  }

  showSuccessSnackbar(message: string): void {
    this.successMessage = message;
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }
}
