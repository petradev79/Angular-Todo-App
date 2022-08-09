import { Component, OnInit } from '@angular/core';
import { EditTodo, Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {
      id: 'test1',
      content: 'First todo',
      completed: false,
      date: new Date('December 17, 2021'),
    },
    {
      id: 'test2',
      content: 'Second todo',
      completed: true,
      date: new Date('January 05, 2022'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onTodoAdded(newTodo: Todo) {
    this.todos.push(newTodo);
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(editedTodo: EditTodo) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === editedTodo.id) {
        return {
          ...todo,
          content: editedTodo.newTodoContent,
        };
      } else return todo;
    });
  }
}
