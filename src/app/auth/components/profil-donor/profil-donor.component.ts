import { Component } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';
import { GestionDonorService } from 'src/app/services/DonorManagement/gestion-donor.service';

@Component({
  selector: 'app-profil-donor',
  templateUrl: './profil-donor.component.html',
  styleUrls: ['./profil-donor.component.css']
})
export class ProfilDonorComponent {
  Id: string | undefined;
  LastName: string | undefined;
  PhoneNumber: string | undefined;
  EmailAddress: string | undefined;
  FirstName: string | undefined;
  address: string | undefined;
  Gender: string | undefined;
  Governorate: string | undefined;
  newDonor: any;

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';


  constructor(
    private donorService: GestionDonorService,
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
    this.newDonor = {
      firstName: this.FirstName,
      lastName: this.LastName,
      email: this.EmailAddress,
      address: this.address,
      gender: this.Gender,
      governorate: this.Governorate,
      phoneNumber: this.PhoneNumber
    };
  }
  updateDonorProfile(): void {
    const donorIdToUpdate =this.Id || "";
    this.donorService.updateDonor(donorIdToUpdate, this.newDonor).subscribe(
      (response: any) => {
        console.log('Profil donor mis à jour avec succès :', response);
        this.authService.setUser(this.newDonor);
        alert("Profil updated successefuly");

      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour du profil donor :', error);
        alert('Error');

      }
    );
  }
  changePasswordDonor(): void {
    if (this.newPassword !== this.confirmPassword) {
      alert('You have to confirm password.');
      return;
    }

    const donorIdToUpdate = this.Id || '';
    const passwordData = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    };

    this.donorService.updateDonorPassword(donorIdToUpdate, passwordData).subscribe(
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
