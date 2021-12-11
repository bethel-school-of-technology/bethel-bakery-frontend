import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { Order } from '../../models/order/order';
import { CartItem } from 'src/app/models/cart-item/cart-item';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  //Property
  id : number = 0;
  oneOrder: Order = new Order;
  cartItems: CartItem[];

  
  constructor(
    private orderService: OrderDetailsService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getOneOrder();
    
  }

  getOneOrder (): void {
    let id: number = 0;
    this.route.paramMap.subscribe(params => {
    id = + params.get('id');
    });

    this.orderService.getOneOrder(id).subscribe(order => {
      this.oneOrder = order
      console.log(this.oneOrder);
      this.cartItems = this.oneOrder.cartItems;
      console.log(this.cartItems);
    });
    
  }

  goBack(): void {
    this.location.back();
  }

}