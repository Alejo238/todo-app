import { Component } from '@angular/core';

class Todo{
descripcion: string;
isDone: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public descripcion : string;

  agregarNuevoTodo(): void{
    this.todos.push({
    descripcion: this.descripcion,
    isDone: false
    });
    this.descripcion = null;
  }

}
