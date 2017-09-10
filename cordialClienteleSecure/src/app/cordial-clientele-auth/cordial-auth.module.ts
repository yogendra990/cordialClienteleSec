import { NgModule} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import  { CommonModule } from '@angular/common';
import { MdCardModule, MdIconModule } from '@angular/material';
import { HttpModule } from '@angular/http';


import { CordialclienteleAuthLoginComponent } from '../cordial-clientele-auth/cordialclientele-auth-login/cordialclientele-auth-login.component';
import { CordialclienteleAuthRegisterComponent } from '../cordial-clientele-auth/cordialclientele-auth-register/cordialclientele-auth-register.component';

import { CordialAuthRouter } from '../cordial-clientele-auth/cordial-auth-router';
import { CoridalClienteleRxjsComponent } from '../cordialClientele-micro-services/coridal-clientele-rxjs/coridal-clientele-rxjs.component';

import { CordialXMLServices } from '../cordial-services/cordial-xml-services';

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
        HttpModule
    ]
    
})

export class CordialAuth {
}
