import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VisiteurComponent } from './visiteur.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CausesComponent } from './components/causes/causes.component';
import { DonationFormComponent } from './components/donation-form/donation-form.component';
import { HeaderComponent } from './components/section/header/header.component';
import { FooterComponent } from './components/section/footer/footer.component';
import { NavbarComponent } from './components/section/navbar/navbar.component';
import { AboutComponent } from './components/section/about/about.component';
import { OurActiviteComponent } from './components/section/our-activite/our-activite.component';
import { DonationComponent } from './components/section/donation/donation.component';
import { BecomeBenefitComponent } from './components/section/become-benefit/become-benefit.component';
import { BecomeAmbassadorComponent } from './components/section/become-ambassador/become-ambassador.component';
import { FeedbacksComponent } from './components/section/feedbacks/feedbacks.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    VisiteurComponent,
    AboutUsComponent,
    ContactUsComponent,
    CausesComponent,
    DonationFormComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    OurActiviteComponent,
    DonationComponent,
    BecomeBenefitComponent,
    BecomeAmbassadorComponent,
    FeedbacksComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class VisiteurModule { }
