import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodoTitle = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo = { title: this.newTodoTitle, isCompleted: false };
      this.todoService.addTodo(newTodo).subscribe(() => {
        this.loadTodos();
        this.newTodoTitle = '';
      });
    }
  }

  updateTodo(todo: any): void {
    this.todoService.updateTodo(todo.id, todo).subscribe(() => {
      this.loadTodos();
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.loadTodos();
    });
  }
}