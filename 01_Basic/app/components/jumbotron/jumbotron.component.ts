import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: `jumbotron.component.htm`,
})
export class JumbotronComponent { 
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;

    constructor(){
        this.jbtHeading="Hullo! %)";
        this.jbtText="Some cool stuff here. Wanna one?";
        this.jbtBtnText="Wanna!";
        this.jbtBtnUrl="/about";
    }
}