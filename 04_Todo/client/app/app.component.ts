import { Component } from '@angular/core';
import {TodoService} from './services/todo.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.htm',
  providers: [TodoService]
})

export class AppComponent { }