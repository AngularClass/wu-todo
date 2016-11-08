import { Component } from '@angular/core';
import { ToDoService } from './todo.service';

@Component({
  selector: 'app',
  template: `
    <app-header></app-header>
    <main>
      <wu-input [(inputValue)]="inputValue" (addToDo)="add($event)"></wu-input>
      <ul *ngIf="todos.length > 0">  
        <li *ngFor="let todo of todos; let i = index">
          <wu-todo [task]="todo" (removed)="remove($event)" >
          </wu-todo>
        </li>
      </ul>
    </main>
  `
})
export class AppComponent {
  todos;
  inputValue = 'yolo';

  constructor( public toDoService: ToDoService ) {
    toDoService.changes.subscribe((todos)=> {
      this.todos = todos;
    });
  }

  add ( todo ) {
    this.toDoService.add(todo);
  }

  remove ( todo ) {
    this.toDoService.remove(todo);
  }
}