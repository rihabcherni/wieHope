import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { BeDonorComponent } from './components/be-donor/be-donor.component';
import { BeAmbassadorComponent } from './components/be-ambassador/be-ambassador.component';
import { ProfilAdminComponent } from './components/profil-admin/profil-admin.component';
import { ProfilAmbassadorComponent } from './components/profil-ambassador/profil-ambassador.component';
import { ProfilDonorComponent } from './components/profil-donor/profil-donor.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    BeDonorComponent,
    BeAmbassadorComponent,
    ProfilAdminComponent,
    ProfilAmbassadorComponent,
    ProfilDonorComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
