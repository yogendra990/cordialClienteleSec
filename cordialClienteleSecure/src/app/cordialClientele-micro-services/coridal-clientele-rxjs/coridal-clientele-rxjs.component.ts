import { Component, OnInit } from '@angular/core';
import * as Rx from "rxjs/Rx";
import { CordialXMLServices } from '../../cordial-services/cordial-xml-services';
@Component({
  selector: 'app-coridal-clientele-rxjs',
  templateUrl: './coridal-clientele-rxjs.component.html',
  styleUrls: ['./coridal-clientele-rxjs.component.css']
})
export class CoridalClienteleRxjsComponent implements OnInit {
  count :any =0;
  constructor(private CordialHttp: CordialXMLServices) { }
  gridData : any;
  arrrayValue : number[] = [1,2,3];
  x:any;
  y:any;
  z: any;
  ngOnInit() {
    [this.x,this.y,this.z]= this.arrrayValue
    console.log(this.x);
  }

  OnClickRxjs(){
    const button = document.querySelector('#rxjsbtn');    
  Rx.Observable.fromEvent(button,"click")
  .scan(() => this.count = this.count + 1)
   .subscribe(()=>console.log(`Count is Clicked and the Count value is ${this.count} times`));
  this.CordialHttp.GetXml().subscribe((data)=>{
    this.gridData = data;
   console.log(this.gridData);
  });
  }
}
