import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateOrder } from '../models/create-order';
import { Inquiry } from '../models/inquiry';
import { InquiryRequest } from '../models/inquryReq';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: CreateOrder): Observable<Order>{
    return this.http.post<Order>('https://localhost:7220/api/Parcel/create-order', order);
  }

  priceInquiry(inquiry: InquiryRequest): Observable<Inquiry>{
    return this.http.post<Inquiry>('https://localhost:7220/api/Parcel/price', inquiry);
  }
}