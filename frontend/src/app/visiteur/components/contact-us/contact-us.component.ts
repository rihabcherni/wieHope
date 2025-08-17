import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/ContactUs/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(
    private ContactService: ContactService, private router: Router,
  ) {
  }
  contact: any = {};
  onSubmit() {
    this.ContactService.addContact(this.contact).subscribe(
      (response) => {
        alert("Add contact us succesfully");
        this.contact = {};
      },
      (error) => {
        console.error('Error adding donor:', error);
      }
    );
  }
}
