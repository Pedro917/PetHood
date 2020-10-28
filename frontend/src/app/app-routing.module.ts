import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './view/landing-page/landing-page.component';
import { ListPetComponent } from './view/list-pet/list-pet.component';
import { RegisterPetComponent } from './view/register-pet/register-pet.component';

const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'cadastro', component: RegisterPetComponent },
  { path: 'pets', component: ListPetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
