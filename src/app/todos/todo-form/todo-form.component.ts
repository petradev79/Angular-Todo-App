import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent implements OnInit {
  inputTodo: string = '';
  @Output() todoAdded = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  onAddTodo() {
    if (this.inputTodo.trim() === '') return;

    const newTodo = {
      id: UUID.UUID(),
      content: this.inputTodo,
      completed: false,
      date: new Date(),
    };

    this.todoAdded.emit(newTodo);
    this.inputTodo = '';
  }
}
