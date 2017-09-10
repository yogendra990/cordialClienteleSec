
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CordialclienteleAuthLoginComponent } from '../cordial-clientele-auth/cordialclientele-auth-login/cordialclientele-auth-login.component';
import { CordialclienteleAuthRegisterComponent } from '../cordial-clientele-auth/cordialclientele-auth-register/cordialclientele-auth-register.component';
import { CoridalClienteleRxjsComponent } from '../cordialClientele-micro-services/coridal-clientele-rxjs/coridal-clientele-rxjs.component';

const CordialAuthRoutes : Routes = [
                                    {path :'Login', component: CordialclienteleAuthLoginComponent },
                                    {path : 'Register', component: CordialclienteleAuthRegisterComponent },
                                    {path: 'rxjs', component: CoridalClienteleRxjsComponent }]
@NgModule({
    imports:[
        RouterModule.forChild(CordialAuthRoutes)
    ],
    exports:[RouterModule]
})

export class CordialAuthRouter {
}
