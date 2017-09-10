import { Http, Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


@Injectable()

export class CordialAuthServices {
    constructor(private CordialAuth:Http){}

    onRegister(){
        this.CordialAuth.post('',{});
    }

    onLogin(){
        this.CordialAuth.get('',{});
    }
}

