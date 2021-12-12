import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order/order';
import { CartDataService } from '../../services/cart-data/cart-data.service';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  newOrder: Order = new Order();
  url = 'loalhost:8080/order';
  nothingInCart: boolean = true;

  constructor(private router: Router, private cartDataService: CartDataService, private http: HttpClient, private orderDetailsService: OrderDetailsService) { }


  ngOnInit(): void {}

  submitOrder() {
    this.nothingInCart = this.orderDetailsService.checkNothingInCart();

    if(!this.nothingInCart){
      this.orderDetailsService.submitOrder(this.newOrder);  
      this.router.navigate(['/confirmation']);
    } else {
      alert("There are no Items In your cart!")
    }
    
  }

  
   }
  
  


