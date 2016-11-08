import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'wu-input',
  template: `
    {{ inputValue }}
    <button (click)="add()"> Add </button>
    <input type="text" [ngModel]="inputValue" (ngModelChange)="onChange($event)">
  `
})
export class WuInputComponent {
  @Output() addToDo = new EventEmitter(); 
  @Output() inputValueChange = new EventEmitter(); 
  @Input() inputValue = ''; // inherits yolo from parent

  add () {
    this.addToDo.emit(this.inputValue);
  }

  onChange ( value ) {
    this.inputValue = value;
    this.inputValueChange.emit(value);
  }
}