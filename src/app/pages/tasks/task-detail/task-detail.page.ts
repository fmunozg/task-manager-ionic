import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
  standalone: false
})
export class TaskDetailPage implements OnInit {

  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }

  toggleCompleted() {
    if (!this.task) return;

    this.task.completed = !this.task.completed;

    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const idx = tasks.findIndex((t: Task) => t.id === this.task!.id);
    if (idx > -1) {
      tasks[idx] = this.task;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

}
