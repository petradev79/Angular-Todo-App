export class Todo {
  id!: string;
  content!: string;
  completed!: boolean;
  date!: Date;
}

export class EditTodo {
  id!: string;
  newTodoContent!: string;
}
