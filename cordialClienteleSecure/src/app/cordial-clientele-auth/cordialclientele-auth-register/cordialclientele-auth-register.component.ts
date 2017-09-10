import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-cordialclientele-auth-register',
  templateUrl: './cordialclientele-auth-register.component.html',
  styleUrls: ['./cordialclientele-auth-register.component.css']
})
export class CordialclienteleAuthRegisterComponent implements OnInit {
  cordialRegisterForms : FormGroup;
  constructor() { }

  ngOnInit() {
    this.cordialRegisterForms = new FormGroup({
      "cordialRegister": new FormGroup({
        "firstName" : new FormControl (null, [Validators.required]),
        "lastName": new FormControl(null, [Validators.required]),
        "Email" : new FormControl(null, [ Validators.required, Validators.email]),
        "Password" : new FormControl(null, [ Validators.required]),
        "ConfirmPassword" : new FormControl(null, [ Validators.required]),
        "TermsAndConditions": new FormControl(null, [ Validators.requiredTrue])
      })
    });
    console.log(this.cordialRegisterForms);
  }



}
