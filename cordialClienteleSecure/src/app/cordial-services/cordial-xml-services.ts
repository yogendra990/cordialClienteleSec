import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import * as Rx from 'rxjs/RX';

@Injectable()
export class CordialXMLServices {
    constructor(private CordialXhr:Http ){}
    
    GetXml(){
        const Header = new Headers();

       return  this.CordialXhr.get("http://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b1b15e88fa797225412429c1c50c122a1",{headers:Header})
        .map((response:Response)=>{
            const XmlData = response.json();
            return XmlData;
        });
    }
}
