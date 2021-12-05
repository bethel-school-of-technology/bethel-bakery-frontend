import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { Customer } from 'src/app/models/customer/customer';
import { CartDataService } from 'src/app/services/cart-data/cart-data.service';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { HttpClientModule } from '@angular/common/http';
import { Product } from 'src/app/models/product/product';
import { CartItem } from 'src/app/models/cart-item/cart-item';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  newOrder: Order = new Order();
  

  id: number = 0;
  firstName: string = "";
  lastName: string = "";
  address: string = "";
  email: string = "";
  phoneNumber: string = "";3
  creditCardNumber: string = "";
  expiration: string = "";
  ccv: string = "";
  subTotal: number = 0 ;
  total: number = 0 ;
  dateTimeStamp: Date ; 
  cartItems: CartItem[] = [];
  customer: Customer = new Customer; 
 static orderInfo: any;


  constructor(private router: Router, private newCustomerInfo: CartDataService, private http: HttpClient, private orderDetailsService: OrderDetailsService) { }


  ngOnInit(): void {
  }
  getItems(product: Product): void {
   
    let url = 'loalhost:8080/order';
  //  what is the URL for posting data to the Db?
    if (localStorage.getItem('cartItems') != null) {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
     }
    }
   addOrder = (order:Order) => {
     this.orderDetailsService.newOrder(Order).subscribe(response => {
        // adding to the Db
     } )
   }
  }
  


  
