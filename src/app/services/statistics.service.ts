import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { ParcelInquiryStatistics } from '../models/statistics';

@Injectable({
  providedIn: 'root'
})

export class StatisticsService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('https://localhost:7220/api/Parcel/orders');
  }

  getInquiry(id: string): Observable<ParcelInquiryStatistics> {
    return this.http.get<ParcelInquiryStatistics>(`https://localhost:7220/api/Parcel/statistics/${id}`);
  }
  
  getInquiries(): Observable<ParcelInquiryStatistics[]> {
    return this.http.get<ParcelInquiryStatistics[]>('https://localhost:7220/api/Parcel/statistics');
  }
}