import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompany(name: string): Observable<Company> {
    return this.http.get<Company>(`https://localhost:7220/api/Company/${name}`);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('https://localhost:7220/api/Company/companies')
  }

  createCompany(createCompany: Company): Observable<Company>{
    return this.http.post<Company>('https://localhost:7220/api/Company/create-company', createCompany);
  }

  editCompany(editCompany: Company, name: string): Observable<Company> {
    return this.http.put<Company>(`https://localhost:7220/api/Company/edit-company/${name}`, editCompany);
  }
  
  deleteCompany(name: string): Observable<string> {
    return this.http.delete<string>(`https://localhost:7220/api/Company/delete-company/${name}`);
  }
}