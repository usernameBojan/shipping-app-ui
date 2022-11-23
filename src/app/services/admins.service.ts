import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})

export class AdminsService {

  constructor(private http: HttpClient) {  }

  getAdmin(id: string): Observable<Admin> {
    return this.http.get<Admin>(`https://localhost:7220/api/Admin/${id}`);
  }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>('https://localhost:7220/api/Admin/admins')
  }

  createAdmin(createAdmin: Admin): Observable<Admin>{
    return this.http.post<Admin>('https://localhost:7220/api/Admin/create-admin', createAdmin);
  }

  editAdmin(editAdmin: Admin, id: string): Observable<Admin> {
    return this.http.put<Admin>(`https://localhost:7220/api/Admin/edit-admin/${id}`, editAdmin);
  }
  
  deleteAdmin(id: string): Observable<string> {
    return this.http.delete<string>(`https://localhost:7220/api/Admin/delete-admin/${id}`);
  }
}