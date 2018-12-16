import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUdemy';
  appItem=['Apples', 'Bananas','Cherries'];

  AddItem(evenewitemnt) {
    this.appItem.push(evenewitemnt);
    console.log(this.appItem);
  }
}
