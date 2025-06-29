import { Component } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss']
})
export class BoardPage {
  tasks: Task[] = [
    { id: 1, title: 'Create Login Page', description: 'Angular + Tailwind', status: 'TODO', createdAt: '2024-01-01' },
    { id: 2, title: 'Setup Backend APIs', status: 'IN_PROGRESS', createdAt: '2024-01-02' },
    { id: 3, title: 'Design Logo', status: 'DONE', createdAt: '2024-01-03' }
  ];

  showModal = false;

  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    status: 'TODO',
    createdAt: new Date().toISOString().split('T')[0],
  };  

  getTasksByStatus(status: string) {
    return this.tasks.filter(task => task.status === status);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addTask() {
    if (!this.newTask.title.trim()) return;

    const newEntry = {
      ...this.newTask,
      id: this.tasks.length + 1,
      createdAt: new Date().toISOString().split('T')[0],
    };

    this.tasks.push(newEntry);
    this.newTask = { id: 0, title: '', description: '', status: 'TODO', createdAt: '' };
    this.closeModal();
  }
}