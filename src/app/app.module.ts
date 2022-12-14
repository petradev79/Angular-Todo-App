import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todos/todo-form/todo-form.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodoItemComponent,
    AutoFocusDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
