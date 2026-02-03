import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  [x: string]: any;

  private apiURL = 'https://jsonplaceholder.typicode.com/todos';
  private storageKey = 'tasks';

  constructor (
    private http: HttpClient
  )
  {}

  getTasks(): Observable<Task[]>{
    const localData = localStorage.getItem(this.storageKey);

    if (localData) {
      return of(JSON.parse(localData));
    }

    return this.http.get<Task[]>(this.apiURL).pipe(
      tap(tasks => localStorage.setItem(this.storageKey, JSON.stringify(tasks)))
    );
  }

  saveTasks(tasks: Task[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  getTaskById(id: number): Task | undefined {
    const tasks = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return tasks.find((t: Task) => t.id === id);
  }

  toggleCompleted(task: Task) {
  task.completed = !task.completed;
}

  
}
