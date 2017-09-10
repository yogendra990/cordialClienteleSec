import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
import { CordialHomeComponent } from './CordialClientele-static/cordial-home/cordial-home.component';
import { CordialAboutComponent } from './CordialClientele-static/cordial-about/cordial-about.component';
import { CordialContactComponent } from './CordialClientele-static/cordial-contact/cordial-contact.component';

import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

const CordialClienteleRoutes : Routes = [{path: '', component:CordialHomeComponent},
                                         {path: 'AboutUs', component:CordialAboutComponent },
                                         {path: 'ContactUs', component:CordialContactComponent },
                                         /** Implement Lazy Loading using */
                                         {path:'', loadChildren:"./cordial-clientele-auth/cordial-auth.module#CordialAuth"}];
@NgModule({
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(CordialClienteleRoutes)
  ],
  exports:[RouterModule]  
})

export class App {
}
