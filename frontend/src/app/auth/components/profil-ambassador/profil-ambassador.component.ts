import { Component } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';
import { GestionAmbassadorService } from 'src/app/services/AmbassadorManagement/gestion-ambassador.service';
@Component({
  selector: 'app-profil-ambassador',
  templateUrl: './profil-ambassador.component.html',
  styleUrls: ['./profil-ambassador.component.css']
})
export class ProfilAmbassadorComponent {
  Id: string | undefined;
  LastName: string | undefined;
  PhoneNumber: string | undefined;
  EmailAddress: string | undefined;
  FirstName: string | undefined;
  address: string | undefined;
  Gender: string | undefined;
  Governorate: string | undefined;

  newAmbassador: any;

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(
    private ambassadorService: GestionAmbassadorService,
    private authService: AuthServicesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser() as {
      _id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      gender: string,
      governorate: string,
      phoneNumber: string
    } | null;


    if (user) {
      if ('_id' in user) {
        this.Id = user._id;
      } else {
        console.error('User object is missing id property');
      }
      if ('firstName' in user) {
        this.FirstName = user.firstName;
      } else {
        console.error('User object is missing firstName property');
      }

      if ('lastName' in user) {
        this.LastName = user.lastName;
      } else {
        console.error('User object is missing lastName property');
      }


      if ('email' in user) {
        this.EmailAddress = user.email;
      } else {
        console.error('User object is missing email property');
      }

      if ('address' in user) {
        this.address = user.address;
      } else {
        console.error('User object is missing address property');
      }

      if ('gender' in user) {
        this.Gender = user.gender;
      } else {
        console.error('User object is missing gender property');
      }

      if ('governorate' in user) {
        this.Governorate = user.governorate;
      } else {
        console.error('User object is missing governorate property');
      }

      if ('phoneNumber' in user) {
        this.PhoneNumber = user.phoneNumber;
      } else {
        console.error('User object is missing phoneNumber property');
      }
    } else {
      console.error('User object is null');
    }
    this.newAmbassador = {
      firstName: this.FirstName,
      lastName: this.LastName,
      email: this.EmailAddress,
      address: this.address,
      gender: this.Gender,
      governorate: this.Governorate,
      phoneNumber: this.PhoneNumber
    };
  }
  updateAmbassadorProfile(): void {
    const donorIdToUpdate =this.Id || "";
    this.ambassadorService.updateAmbassador(donorIdToUpdate, this.newAmbassador).subscribe(
      (response: any) => {
        console.log('Profil donor mis à jour avec succès :', response);
        this.authService.setUser(this.newAmbassador);
        alert("Profil updated successefuly");

      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour du profil donor :', error);
        alert('Error');

      }
    );
  }
  changePasswordAmbassador(): void {
    if (this.newPassword !== this.confirmPassword) {
      alert('You have to confirm password.');
      return;
    }

    const ambassadorIdToUpdate = this.Id || '';
    const passwordData = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    };

    this.ambassadorService.updateAmbassadorPassword(ambassadorIdToUpdate, passwordData).subscribe(
      (response: any) => {
        console.log('Password updated successfully:', response);
        alert('Password updated successfully.');
      },
      (error: any) => {
        console.error('Error updating password:', error);
        alert('Error updating password.');

      }
    );
    }
}
