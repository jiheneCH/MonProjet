import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApartmentByResidenceComponent } from './apartment-by-residence/apartment-by-residence.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    AddApartmentComponent,
    ApartmentsComponent,
    ResidenceFormComponent,
    ApartmentByResidenceComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
