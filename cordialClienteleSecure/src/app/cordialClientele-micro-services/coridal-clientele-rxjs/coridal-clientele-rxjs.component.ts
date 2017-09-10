import { Component, OnInit } from '@angular/core';
import * as Rx from "rxjs/Rx";

@Component({
  selector: 'app-coridal-clientele-rxjs',
  templateUrl: './coridal-clientele-rxjs.component.html',
  styleUrls: ['./coridal-clientele-rxjs.component.css']
})
export class CoridalClienteleRxjsComponent implements OnInit {
  count :any =0;
  constructor() { }
  
  ngOnInit() {
  }

  OnClickRxjs(){
    const button = document.querySelector('#rxjsbtn');    
  Rx.Observable.fromEvent(button,"click")
  .scan(() => this.count = this.count + 1)
   .subscribe(()=>console.log(`Count is Clicked and the Count value is ${this.count} times`));
  }
}
