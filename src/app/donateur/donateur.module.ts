import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DonateurComponent } from './donateur.component';
import { ListeBesoinsComponent } from './components/liste-besoins/liste-besoins.component';
import { HistoriqueDonsComponent } from './components/historique-dons/historique-dons.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DonateurComponent,
    ListeBesoinsComponent,
    HistoriqueDonsComponent,
    SideBarComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule 
  ]
})
export class DonateurModule { }
