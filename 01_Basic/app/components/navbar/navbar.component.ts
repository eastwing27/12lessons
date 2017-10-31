import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: `navbar.component.htm`,
})
export class NavbarComponent {
    name = 'Angular';
    branding = 'A2 CoolApp'
}
