import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http:HttpClient) {

   }
  newOrder(order: Order):Obsevable<Order>{
     return this.http.post<Order>('loalhost:8080/order', order);
   }
}
