import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './view/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterPetComponent } from './view/register-pet/register-pet.component';
import { HeaderComponent } from './components/header/header.component';
import { ListPetComponent } from './view/list-pet/list-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    RegisterPetComponent,
    HeaderComponent,
    ListPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
