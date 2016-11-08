import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToDoService {
 
  changes = new BehaviorSubject(['item1', 'item2', 'item3']);

  get( ) {
    var todos = this.changes.value.slice();
    return todos;
  }

  add ( todo ) {
    var todos = this.get();
    todos.push(todo);
    this.setState(todos);
  }

  remove ( todo ) {
    var todos = this.get().filter(value => todo !== value);
    this.setState(todos);
  }

  private setState ( todos ) {
    this.changes.next(todos)
  }
}