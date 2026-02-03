import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage {
  
  isDark = false;

  ngOnInit() {
    this.isDark = JSON.parse(localStorage.getItem('darkMode') || 'false');
    document.body.classList.toggle('dark', this.isDark);
  }

  toggleDarkMode(event: any) {
    this.isDark = event.detail.checked;
    document.body.classList.toggle('dark', this.isDark);
    localStorage.setItem('darkMode', JSON.stringify(this.isDark));
  }
}

