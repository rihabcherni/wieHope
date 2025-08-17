import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisiteurModule } from './visiteur/visiteur.module';
import { AdminModule } from './admin/admin.module';
import { DonateurModule } from './donateur/donateur.module';
import { ResponsableEcoleModule } from './responsable-ecole/responsable-ecole.module';
import { AuthModule } from './auth/auth.module';
import { Page404Component } from './visiteur/page404/page404.component';
import 'bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VisiteurModule,
    AdminModule,
    DonateurModule,
    ResponsableEcoleModule,
    AuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
