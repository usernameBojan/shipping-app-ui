import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token: any = localStorage.getItem('authToken');
    let currentTime: number = Date.parse(new Date().toString());
    let payload: any;
    let exp: number;

    if (token) {
      payload = JSON.parse(window.atob(token.split(".")[1]));
      exp = parseInt(payload.exp) * 1000;

      if (currentTime > exp) {
        localStorage.clear();
        window.location.href = '/login';
      }
    } else this.router.navigate(['/login']);
  }
}