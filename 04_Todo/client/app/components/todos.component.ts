import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../Todo'

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.htm'
})

export class TodosComponent implements OnInit {
    todos: Todo[];

    constructor(private _todo: TodoService){

    }
    
    ngOnInit(): void
    {
        this.todos = [];
        this._todo.getTodos()
            .subscribe(todos => {
                this.todos = todos;
            });
    }

    addTodo(event, todoText){
        var result;
        var newTodo ={
            text: todoText.value,
            isCompleted: false
        };

        result = this._todo.saveTodo(newTodo);
        result.subscribe(() => {
            this.todos.push(newTodo);
            todoText.value = '';
        })
    }
 }