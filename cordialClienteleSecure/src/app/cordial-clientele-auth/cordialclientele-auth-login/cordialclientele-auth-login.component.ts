import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cordialclientele-auth-login',
  templateUrl: './cordialclientele-auth-login.component.html',
  styleUrls: ['./cordialclientele-auth-login.component.css']
})
export class CordialclienteleAuthLoginComponent implements OnInit {
  cordialLoginForms : FormGroup;
  constructor() { }

  ngOnInit() {
   this.cordialLoginForms = new FormGroup({
    "CordialLogin" : new FormGroup({
      "Email" : new FormControl(null,[Validators.required,Validators.email]),
      "Password": new FormControl(null, [Validators.required])
    })
   });
   console.log(this.cordialLoginForms);
   console.log(document.querySelector('input'));
  }

}
