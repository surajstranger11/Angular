import { Component } from "@angular/core";

@Component({
    selector:'app-warning',
    template:'<p>This is Warning Component</p>',
    styles:[`
    p {
        color:red;
    }
    `]
})

export class WarningComponent{}