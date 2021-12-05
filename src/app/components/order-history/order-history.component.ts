import { Component, OnInit, } from '@angular/core';
import { Order } from 'src/app/models/order/order';
import { OrderDataService } from 'src/app/services/order-data/order-data.service';




@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  //Property
  orders: Order[] = [];
  
  constructor(private orderService: OrderDataService) { }

  ngOnInit(): void {
    this.getOrders();

    // this.orders.push(new order[])

  }

  getOrders = () => {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

}
