import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditTodo, Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoSelected = new EventEmitter<string>();
  newTodoContent: string = '';
  isEditing: boolean = false;
  @Output() todoEdited = new EventEmitter<EditTodo>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteTodo(id: string) {
    this.todoSelected.emit(id);
  }

  onEditTodo() {
    this.newTodoContent = this.todo.content;
    this.isEditing = true;
  }

  onEditedTodo(id: string) {
    const editedTodo = {
      id,
      newTodoContent: this.newTodoContent,
    };
    this.todoEdited.emit(editedTodo);
    this.isEditing = false;
  }
}
