import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { App } from './app.router';

// import { HttpModule } from '@angular/http';

//import { HttpClient } from '@angular/common/http';

import { MdCardModule, MdIconModule } from '@angular/material';
import { CordialHomeComponent } from './CordialClientele-static/cordial-home/cordial-home.component';
import { CordialAboutComponent } from './CordialClientele-static/cordial-about/cordial-about.component';
import { CordialContactComponent } from './CordialClientele-static/cordial-contact/cordial-contact.component';

// import { CordialClienteleAuthComponent } from './cordial-clientele-auth/cordial-clientele-auth.component';
// import { CordialclienteleAuthLoginComponent } from './cordial-clientele-auth/cordialclientele-auth-login/cordialclientele-auth-login.component';
// import { CordialclienteleAuthRegisterComponent } from './cordial-clientele-auth/cordialclientele-auth-register/cordialclientele-auth-register.component';

// import { CordialAuth } from './cordial-clientele-auth/cordial-auth.module'
import { CordialXMLServices } from './cordial-services/cordial-xml-services';

//import kendo-UI Buttons and angular-animations
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ButtonsModule } from "@progress/kendo-angular-buttons";


@NgModule({
  declarations: [
    AppComponent,
    CordialHomeComponent,
    CordialAboutComponent,
    CordialContactComponent,
  
    
  ],
  imports: [
    BrowserModule,
    App,
    MdCardModule,
    MdIconModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    ReactiveFormsModule,
    GridModule,
   // HttpClient 
  ],
providers: [ CordialXMLServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
