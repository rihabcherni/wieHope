import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';
import { SuccessLoginMessageService } from '../../services/success-login-message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  link:string ='';
  loginSuccess: boolean = false;
  successMessage: string = '';
  showSuccessMessage: boolean = false;

  constructor(
    private authService: AuthServicesService,
    private router: Router,
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
  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        const token = response.token;
        let role = response.role;
        const user = response.user;
        if(role==="Ambassador"){
          const school = response.school;
          this.authService.setSchool(school);
        }
        this.authService.setToken(token);
        this.authService.setRole(role);
        this.authService.setUser(user);
        this.successMessageService.showSuccessMessage(`Login successful ${role+" : " + user?.firstName+" "+ user?.lastName}`);
        setTimeout(() => {
         this.getLinkLogin();
         this.router.navigate([this.link]);
        }, 2000);
        this.loginSuccess = true;
      },
      (error) => {
        this.successMessageService.showSuccessMessage(`Login error ${error}`);
      }
    );
  }
  showSuccessSnackbar(message: string): void {
    this.successMessage = message;
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 4000);
  }
}
