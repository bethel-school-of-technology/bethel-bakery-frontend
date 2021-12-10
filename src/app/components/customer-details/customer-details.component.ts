import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order/order';
import { CartDataService } from '../../services/cart-data/cart-data.service';
import { OrderDetailsService } from '../../services/order-details.service';
import { Product } from '../../models/product/product';
import { CartItem } from '../../models/cart-item/cart-item';



@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  newOrder: Order = new Order();
  url = 'loalhost:8080/order';

<<<<<<< HEAD
  //   id: number = 0;
  //   firstName: string = "";
  //   lastName: string = "";
  //   address: string = "";
  //   email: string = "";
  //   phoneNumber: string = "";3
  //   creditCardNumber: string = "";
  //   expiration: string = "";
  //   ccv: string = "";
  //   subTotal: number = 0 ;
  //   total: number = 0 ;
  //   dateTimeStamp: number = Date.now(); 
  //   cartItems: CartItem[] = [];
  //   customer: Customer = new Customer; 
  //  static orderInfo: any;

=======
  constructor(private router: Router, private cartDataService: CartDataService, private http: HttpClient, private orderDetailsService: OrderDetailsService) { }
>>>>>>> 89fe4c62472c26733f911058592fe19a8ce49835


  ngOnInit(): void {}

  submitOrder() {
    this.orderDetailsService.submitOrder(this.newOrder);  
  }
<<<<<<< HEAD
  getItems(product: Product): void {

    // let url = 'loalhost:8080/order';

    if (localStorage.getItem('cartItems') != null) {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
  }
  addOrder() {
  
    return this.http.post(this.url, this.newOrder).toPromise().then(data: any =>{

    });
  }

}



=======

  

  // getItems(product: Product): void {
   
  // //  what is the URL for posting data to the Db?
  //   if (localStorage.getItem('cartItems') != null) {
  //     let cartItems: CartItem = JSON.parse(localStorage.getItem('cartItems'));
  //    }
  //   }
  //   addOrder(){
  //     this.orderDetailsService.newOrder(this.newOrder).subscribe(order =>{
  //       console.log(order);

  //     })
  //   }

  //  addOrder = (order:Order) => {
  //    this.orderDetailsService.newOrder(Order).subscribe(response => {
      
  //     this

  //       // adding to the Db
  //    } )
   }
  
  
>>>>>>> 89fe4c62472c26733f911058592fe19a8ce49835


