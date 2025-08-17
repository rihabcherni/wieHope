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
    this.router.navigate(['/admin/profil']);
    this.isDropdownOpen = false;
  }
  sidebarLinks = [
    { routerLink: '/admin', iconClass: 'fas fa-tachometer-alt', title: 'Dashboard' },
    { routerLink: '/admin/schools', iconClass: 'fas fa-school', title: 'Schools' },
    { routerLink: '/admin/donation', iconClass:"fas fa-hand-holding-usd" , title: 'Donations' },
    { routerLink: '/admin/donors', iconClass: 'fas fa-users-cog', title: 'Donors' },
    { routerLink: '/admin/ambassador-management', iconClass: 'fas fa-users-cog', title: 'Ambassadors' },
    { routerLink: '/admin/contact-us', iconClass: 'fas fa-address-book ', title: 'Contact Us' },
    { routerLink: '/admin/profil', iconClass: 'fas fa-user-circle', title: 'Profil' },
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
  @Input() isSidebarOpen: boolean = true;
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
