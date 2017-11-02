import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: `app.component.htm`,
    providers: [GithubService]
})
export class AppComponent { name = 'Angular'; }
