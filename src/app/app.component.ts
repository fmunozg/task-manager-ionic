import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    const darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
    document.body.classList.toggle('dark', darkMode);
  }
}
