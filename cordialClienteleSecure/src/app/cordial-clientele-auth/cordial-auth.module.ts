import { NgModule} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import  { CommonModule } from '@angular/common';
import { MdCardModule, MdIconModule } from '@angular/material';
//  import { HttpModule } from '@angular/http';
// inOrder to use HttpClient We have register its module with Angular module as follows
import { HttpClientModule} from '@angular/common/http'; 
import { CordialclienteleAuthLoginComponent } from '../cordial-clientele-auth/cordialclientele-auth-login/cordialclientele-auth-login.component';
import { CordialclienteleAuthRegisterComponent } from '../cordial-clientele-auth/cordialclientele-auth-register/cordialclientele-auth-register.component';

import { CordialAuthRouter } from '../cordial-clientele-auth/cordial-auth-router';
import { CoridalClienteleRxjsComponent } from '../cordialClientele-micro-services/coridal-clientele-rxjs/coridal-clientele-rxjs.component';

import { CordialXMLServices } from '../cordial-services/cordial-xml-services';

//importing grid kendo-ui grid module

import { GridModule } from '@progress/kendo-angular-grid';
//import kendo-UI Buttons and angular-animations

// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ButtonsModule } from "@progress/kendo-angular-buttons";


@NgModule({
    declarations:[
        CordialclienteleAuthLoginComponent,
        CordialclienteleAuthRegisterComponent,
        CoridalClienteleRxjsComponent 
    ],
    imports:[
        CommonModule,
        CordialAuthRouter,
        MdCardModule,
        MdIconModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonsModule,
        HttpClientModule,
       // HttpModule,      
        GridModule
       // HttpClient
    ],

    providers:[CordialXMLServices]
    
})

export class CordialAuth {
}
