import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
  standalone: false
})
export class TaskListPage {

tasks: Task[] = [];
loading = true;

constructor(
  private taskService: TaskService
) {}

ionViewWillEnter() {
  this.taskService.getTasks().subscribe(data => {
    this.tasks = data;
    this.loading = false;
  });
}


}
