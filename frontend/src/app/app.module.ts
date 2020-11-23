import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './view/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterPetComponent } from './view/register-pet/register-pet.component';
import { HeaderComponent } from './components/header/header.component';
import { ListPetComponent } from './view/list-pet/list-pet.component';
import { fromEventPattern } from 'rxjs';
import { ModalListaComponent } from './components/modal-lista/modal-lista.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    RegisterPetComponent,
    HeaderComponent,
    ListPetComponent,
    ModalListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
