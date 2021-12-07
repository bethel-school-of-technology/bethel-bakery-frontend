import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { Order } from '../../models/order/order';
import { CartDataService } from '../../services/cart-data/cart-data.service';
import { OrderDetailsService } from '../../services/order-details.service';
import { Product } from '../../models/product/product';
import { CartItem } from '../../models/cart-item/cart-item';
import { Customer } from '../../models/customer/customer';


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
  dateTimeStamp: number = Date.now(); 
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
    addOrder(){
      this.orderDetailsService.newOrder(this.newOrder).subscribe(order =>{
        console.log(order);

      })

    }
  //  addOrder = (order:Order) => {
  //    this.orderDetailsService.newOrder(Order).subscribe(response => {
      
  //     this

  //       // adding to the Db
  //    } )
   }
  
  


  
