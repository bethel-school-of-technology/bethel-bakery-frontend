import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order/order';

const httpOptions = {
  headers: new HttpHeaders({'content-type ': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  //Properties//

      //check backend URL//
  orderHistoryUrl: string = "http://localhost:8080/order-history"

  constructor(private http: HttpClient) {}

  //Methods
  getOrders ():Observable<Order[]>
  {
    return this.http.get<Order[]>(this.orderHistoryUrl);
  }
}
