import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.page.html',
  styleUrls: ['./task-new.page.scss'],
  standalone: false
})
export class TaskNewPage implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      date: ['']
    });
  }

  saveTask() {
    if (this.form.invalid) {
      return;
    }

    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    tasks.unshift({
      id: Date.now(),
      title: this.form.value.title,
      completed: false,
      description: this.form.value.description,
      date: this.form.value.date
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.router.navigate(['/tasks']);
  }
}

