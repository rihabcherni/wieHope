import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/auth/services/auth-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( private authService: AuthServicesService, private router: Router,) {
  }
  userId: any;
  ngOnInit(): void {
    this.userId= this.authService.getUser();
  }

  isDropdownOpen: boolean = false;
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logout(): void {
    this.router.navigate(['/']);
    this.isDropdownOpen = false;
    this.authService.removeRole();
    this.authService.removeToken();
    this.authService.removeUser();
    this.userId= this.authService.getUser();
  }
  changePassword(): void {
    this.router.navigate(['/donor/profil']);
    this.isDropdownOpen = false;
  }
}
