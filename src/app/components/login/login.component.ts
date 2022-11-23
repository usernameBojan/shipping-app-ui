import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogIn } from './../../models/login'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  ngOnInit(): void {
    const hasToken: boolean = localStorage.getItem('authToken') !== null;

    if (hasToken) {
      this.router.navigate(['/admin']);
    }
  }

  logIn = new LogIn();
  constructor(private authService: AuthService, private router: Router) { }

  login(login: LogIn): void {
    this.authService.login(login).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
      window.location.href = '/admin';
    });
  }
}