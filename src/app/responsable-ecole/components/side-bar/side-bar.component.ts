import { Component, Renderer2, ElementRef ,OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';
import { AuthServicesService } from 'src/app/auth/services/auth-services.service';

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
    this.authService.removeSchool();
  }
  changePassword(): void {
    this.router.navigate(['/ambassador/profil']);
    this.isDropdownOpen = false;
  }

  sidebarLinks = [
    { routerLink: '/ambassador', iconClass: 'fas fa-tachometer-alt', title: 'Dashboard' },
    { routerLink: '/ambassador/school-management', iconClass: 'fas fa-book', title: 'school managements' },
    // { routerLink: '/ambassador/donors', iconClass: 'fas fa-users-cog', title: 'Donors' },
    { routerLink: '/ambassador/donation', iconClass:"fas fa-hand-holding-usd" , title: 'Donations' },
    { routerLink: '/ambassador/profil', iconClass: 'fas fa-user-circle', title: 'Profil' },
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
