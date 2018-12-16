import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
    selector:'app-cart',
    //selector:'[app-cart]',
    templateUrl:'./cart.component.html',
    styleUrls:['./cart.component.css']
})
export class CartComponent {
    @Input() items=[];
    @Output() OnitemAdded = new EventEmitter<string>();

    newItem='';
    constructor(){
        //console.log(this.items);
    }
    
    onClickAdd() {
        this.OnitemAdded.emit(this.items.toString()); 
        console.log(this.items);       
    }
}