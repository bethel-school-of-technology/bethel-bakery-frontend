import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order/order';
import { OrderDataService } from 'src/app/services/order-data/order-data.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  //Property
  orders: Order[] = [];
  
  constructor(private orderService: OrderDataService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders = () => {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

}
