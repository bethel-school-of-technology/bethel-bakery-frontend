import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order/order';

const httpOptions = {
  headers: new HttpHeaders({'content-type ': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

        //check backend URL//
        orderHistoryUrl: string = "http://localhost:8080/order-history"
        checkoutUrl: string = "http://localhost:8080/checkout"

  constructor(private http:HttpClient) {

   }
  newOrder(order: Order):Observable<Order>{
     return this.http.post<Order>('loalhost:8080/order', order);
   }

   
  getOrders ():Observable<Order[]>
  {
    return this.http.get<Order[]>(this.orderHistoryUrl);
  }

  getOneOrder(id: number):Observable<Order>{
    return this.http.get<Order>(`${this.orderHistoryUrl}/${id}`)
  }
}
