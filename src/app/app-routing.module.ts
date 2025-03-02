import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentByResidenceComponent } from './apartment-by-residence/apartment-by-residence.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:"home", component:HomeComponent},
  {path:"residences", component:ResidencesComponent},
  {path:"apartments", component:ApartmentsComponent},
  { path: "apartments-by-residence/:id", component: ApartmentByResidenceComponent },
  {path:"addResidence", component:AddResidenceComponent},
  { path: "apartments/add", component: AddApartmentComponent },
  {path:"details/:id", component:ResidenceDetailsComponent},
  { path: '**', component: NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 
