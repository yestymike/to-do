import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTodoTitle = '';
  todos = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a To-Do App', completed: false }
  ];

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo = {
        id: Date.now(),
        title: this.newTodoTitle,
        completed: false
      };
      this.todos.push(newTodo);
      this.newTodoTitle = '';
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}