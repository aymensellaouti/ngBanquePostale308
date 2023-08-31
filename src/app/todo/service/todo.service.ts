import { Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.service";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}
  /**
   * Permet de logger les todos
   */
  logTodo() {
    this.loggerService.logger(this.todos);
  }
  /**
   * Ajouter un todo
   * @param todo : Todo
   */
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  /**
   * Retourne une liste de Todos
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }
  /**
   * Permet de supprimer un Todo
   * @param todo: Todo
   */
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.slice(index, 1);
  }
}
