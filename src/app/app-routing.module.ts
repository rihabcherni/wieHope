import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {  VisiteurComponent } from './visiteur/visiteur.component';
import { ResponsableEcoleComponent  } from './responsable-ecole/responsable-ecole.component';
import { DonateurComponent  } from './donateur/donateur.component';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { DashboardComponent as  DashboardComponentDonor  } from './donateur/components/dashboard/dashboard.component';
import { GestionDonateurComponent } from './admin/components/gestion-donateur/gestion-donateur.component';
import { GestionResponsableComponent } from './admin/components/gestion-responsable/gestion-responsable.component';
import { GestionEcoleComponent } from './admin/components/gestion-ecole/gestion-ecole.component';
import { DashboardResponsableComponent } from './responsable-ecole/components/dashboard-responsable/dashboard-responsable.component';
import { GestionListeBesoinsEcoleComponent } from './responsable-ecole/components/gestion-liste-besoins-ecole/gestion-liste-besoins-ecole.component';
import { SchoolNeedsListManagementComponent } from './admin/components/school-needs-list-management/school-needs-list-management.component';
import { HistoriqueDonsComponent } from './donateur/components/historique-dons/historique-dons.component';
import { ListeBesoinsComponent } from './donateur/components/liste-besoins/liste-besoins.component';
import { AboutUsComponent } from './visiteur/components/about-us/about-us.component';
import { ContactUsComponent } from './visiteur/components/contact-us/contact-us.component';
import { ContactUsComponent as ContactUsAdminComponent } from './admin/components/contact-us/contact-us.component';
import { DonationFormComponent } from './visiteur/components/donation-form/donation-form.component';
import { CausesComponent } from './visiteur/components/causes/causes.component';
import { Page404Component } from './visiteur/page404/page404.component';
import { HomeComponent } from './visiteur/components/home/home.component';
import { BeDonorComponent } from './auth/components/be-donor/be-donor.component';
import { BeAmbassadorComponent } from './auth/components/be-ambassador/be-ambassador.component';
import { DonationsComponent } from './admin/components/donations/donations.component';
import { DonationsComponent as DonationsComponentRes  } from './responsable-ecole/components/donations/donations.component';
import { ProfilAdminComponent } from './auth/components/profil-admin/profil-admin.component';
import { ProfilDonorComponent } from './auth/components/profil-donor/profil-donor.component';
import { ProfilAmbassadorComponent } from './auth/components/profil-ambassador/profil-ambassador.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { DonorsComponent } from './responsable-ecole/components/donors/donors.component';
const routes: Routes = [
  { path: '', component: VisiteurComponent, children:[
      {path:'', component: HomeComponent},
      {path:'about-us', component: AboutUsComponent},
      {path:'our-causes', component: CausesComponent},
      {path:'donation', component: DonationFormComponent},
      {path:'contact-us', component: ContactUsComponent},
      {path:'login', component:LoginComponent},
      {path:'be-donor', component:BeDonorComponent},
      {path:'be-ambassador', component:BeAmbassadorComponent},
      {path:'forgot-password', component:ForgotPasswordComponent},
      {path:'reset-password', component:ResetPasswordComponent},
  ]},
  { path: 'admin', component: AdminComponent,children:[
    {path:'', component:DashboardComponent},
    {path:'schools', component:GestionEcoleComponent},
    {path:'donors', component:GestionDonateurComponent},
    {path:'profil', component:ProfilAdminComponent},
    {path:'contact-us', component:ContactUsAdminComponent},
    {path:'donation',component:DonationsComponent},
    {path:'donor-management', component:GestionDonateurComponent},
    {path:'ambassador-management', component:GestionResponsableComponent},
    {path:'school-needs-list-management', component:SchoolNeedsListManagementComponent},

  ] },
  { path: 'ambassador', component: ResponsableEcoleComponent ,children:[// responsable-ecole
    {path:'', component:DashboardResponsableComponent},
    {path:'school-management', component:GestionListeBesoinsEcoleComponent},
    {path:'profil', component:ProfilAmbassadorComponent},
    {path:'donors', component:DonorsComponent},
    {path:'donation',component:DonationsComponentRes},
  ] },
  { path: 'donor', component: DonateurComponent, children:[
    {path:'', component:DashboardComponentDonor},
    {path:'history-donations', component:HistoriqueDonsComponent},
    {path:'schools-needs', component:ListeBesoinsComponent},
    {path:'profil', component:ProfilDonorComponent},
  ] },
  { path: '**', redirectTo: '/not-found' },
  { path: 'not-found', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
