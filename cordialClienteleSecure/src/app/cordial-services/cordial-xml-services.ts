import { Injectable } from '@angular/core';
// import {Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
// implementing HttpClient from '@angular/common/http';
import { HttpClient, HttpParams} from '@angular/common/http';
import * as Rx from 'rxjs/RX';

@Injectable()
export class CordialXMLServices {
    constructor(private CordialXhr:HttpClient ){}
    
    GetXml(){
        const Header = new Headers();
        // let UrlSearchParams = new URLSearchParams();
        // UrlSearchParams.set('api_key','R2FbKozMOIvb7THVdi5BBT40VDY3DyMWxMreThub');
        //  UrlSearchParams.set('page','4');
        // let requestOptions = new RequestOptions();
        // requestOptions.search = UrlSearchParams;
       return  this.CordialXhr.get("https://api.ed.gov/data/mbk-bachelors-or-higher?api_key=R2FbKozMOIvb7THVdi5BBT40VDY3DyMWxMreThub&per_page=10")
        .map((response)=>{
            const XmlData = response;
            return XmlData;
        });
    }
}
