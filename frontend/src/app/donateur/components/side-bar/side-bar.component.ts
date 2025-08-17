import { Component, Renderer2, ElementRef ,OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';
import { AuthServicesService } from '../../../auth/services/auth-services.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
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
  }
  changePassword(): void {
    this.router.navigate(['/donor/profil']);
    this.isDropdownOpen = false;
  }

  sidebarLinks = [
    { routerLink: '/donor', iconClass: 'fas fa-tachometer-alt', title: 'Dashboard' },
    { routerLink: '/donor/history-donations', iconClass: 'fas fa-donate', title: 'History donations' },
    { routerLink: '/donor/schools-needs', iconClass: 'fas fa-school', title: 'Schools needs' },
    { routerLink: '/donor/profil', iconClass: 'fas fa-user-circle', title: 'Profil' },
    { routerLink: '/', iconClass: 'fas fa-sign-out-alt', title: 'Sign Out' }
  ];
  activeLink: string = '';
  constructor(private router: Router, private authService: AuthServicesService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url;
      }
    });
  }
  nameUser =this.authService.getUserName();
  photo =this.authService.getUserPhoto();

  @Input() isSidebarOpen: boolean = true;
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
