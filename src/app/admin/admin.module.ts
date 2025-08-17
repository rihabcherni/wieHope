import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { GestionResponsableComponent } from './components/gestion-responsable/gestion-responsable.component';
import { GestionEcoleComponent } from './components/gestion-ecole/gestion-ecole.component';
import { GestionDonateurComponent } from './components/gestion-donateur/gestion-donateur.component';
import { SchoolNeedsListManagementComponent } from './components/school-needs-list-management/school-needs-list-management.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DonationsComponent } from './components/donations/donations.component';
import { DatePipe } from '@angular/common';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GestionResponsableComponent,
    GestionEcoleComponent,
    GestionDonateurComponent,
    SchoolNeedsListManagementComponent,
    SideBarComponent,
    DonationsComponent,
    SnackBarComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [DatePipe],
})
export class AdminModule { }
