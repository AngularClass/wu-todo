import { EventEmitter, Input, Output, Component } from '@angular/core';

@Component({
  selector: 'wu-todo',
  template: `
    {{ task }} 
    <button (click)="remove()"> Remove </button>
  `
})
export class ToDoCardComponent {
  @Input() task: string;
  @Output() removed = new EventEmitter();

  remove () {
    this.removed.emit(this.task);
  }
}