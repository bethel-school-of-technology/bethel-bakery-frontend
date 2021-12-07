import { Component, OnInit, } from '@angular/core';
import { Order } from '../../models/order/order';
import { OrderDetailsService } from '../../services/order-details.service';





@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  //Property
  orders: Order[] = [];
  Order: Order = new Order();
  
  constructor(private orderService: OrderDetailsService) { }

  ngOnInit(): void {
    this.getOrders();
   

  }

  getOrders = () => {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

}