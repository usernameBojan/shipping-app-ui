import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'shipping-app-ui';
  hasToken: boolean = localStorage.getItem('authToken') !== null;

  logOut(): void {
    localStorage.clear();
  }
}