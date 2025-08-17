import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResponsableEcoleComponent } from './responsable-ecole.component';
import { GestionListeBesoinsEcoleComponent } from './components/gestion-liste-besoins-ecole/gestion-liste-besoins-ecole.component';
import { DashboardResponsableComponent } from './components/dashboard-responsable/dashboard-responsable.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PopGestionComponent } from './components/gestion-liste-besoins-ecole/pop-gestion/pop-gestion.component';
import { DonationsComponent } from './components/donations/donations.component';
import { DonorsComponent } from './components/donors/donors.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResponsableEcoleComponent,
    GestionListeBesoinsEcoleComponent,
    DashboardResponsableComponent,
    SideBarComponent,
    PopGestionComponent,
    DonationsComponent,
    DonorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ResponsableEcoleModule { }
