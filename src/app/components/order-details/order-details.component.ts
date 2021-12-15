import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { Order } from '../../models/order/order';
import { CartItem } from 'src/app/models/cart-item/cart-item';
import { MoneyService } from 'src/app/services/money/money.service';


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
  tax:number = 0;

  
  constructor(
    private orderService: OrderDetailsService,
    private location: Location,
    private route: ActivatedRoute,
    private moneyService: MoneyService
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
      this.cartItems = this.oneOrder.cartItems;
      this.tax = this.moneyService.calculateTax(this.oneOrder.subTotal);
    });
    
  }

  goBack(): void {
    this.location.back();
  }

}