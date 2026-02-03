import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { Task } from '../models/task.model';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    });

    service = TestBed.inject(TaskService);
  });

  it('should toggle task completed state', () => {
    const task: Task = {
      id: 1,
      title: 'Test task',
      completed: false
    };

    service.toggleCompleted(task);
    expect(task.completed).toBeTrue();
  });
});
