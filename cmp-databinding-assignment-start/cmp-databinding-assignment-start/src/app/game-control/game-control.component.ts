import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startEvent= new EventEmitter<number>();
  counter:number=0;
  ref; rfe1;
 increment(){
  this.counter+=1;
  
  console.log("value in  Increment Method: " + this.counter);
}
  constructor() { }

  ngOnInit() {
  }
  OnButtonStart(){
    this.rfe1= setInterval(() => {
      this.increment();
  }, 1000 );
  this.ref = setInterval(() => {this.startEvent.emit(this.counter);},1000);
  console.log("Counter value in onbutton start: " + this.counter);
  
  }
  OnButtonStop(){
clearInterval(this.ref);
clearInterval(this.rfe1);
  }
}
