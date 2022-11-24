import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LogIn } from '../models/login';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  public login (login: LogIn): Observable<string> {
     return this.http.post(
      'https://localhost:7220/api/Admin/login',
      login, { responseType: 'text'}
     )
  }

  public isAuthenticated(): boolean {
    const token: any = localStorage.getItem('authToken');
    let currentTime: number = Date.parse(new Date().toString());
    let payload: any;
    let exp: number;

    if (token) {
      payload = JSON.parse(window.atob(token.split(".")[1]));
      exp = parseInt(payload.exp) * 1000;

      return currentTime < exp;
    }

    return token;
  }
}