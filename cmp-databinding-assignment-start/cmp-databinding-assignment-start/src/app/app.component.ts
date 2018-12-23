import { Component } from '@angular/core';
import { ArgumentType } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventdata:any;
  OnstartEvent(evnentData:number){
this.eventdata=evnentData;
console.log("In App COmponenet Emitted event value: " + evnentData);
  }
}
