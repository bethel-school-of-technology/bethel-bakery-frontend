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
  phoneNumber: string = "";
  creditCardNumber: string = "";
  expiration: string = "";
  ccv: string = "";
  subTotal: number = 0 ;
  total: number = 0 ;
  dateTimeStamp: Date ; 
  cartItems: CartItem[] = [];
  customer: Customer = new Customer; 
 static orderInfo: any;


  constructor(private router: Router, private newCustomerInfo: CartDataService, private http: HttpClient) { }


  ngOnInit(): void {
  }
  getItems(product: Product): void {
   
    let url = '';
  //  what is the URL for posting data to the Db?
    if (localStorage.getItem('cartItems') != null) {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
      this.http.post(url,{ Order }).toPromise().then((data: any) =>{
      //  where does data post(url for backend)?
       console.log(data.Order);
     })
    }
    // will simplify when order model is merged.
  }
  
}

  
// comment out post method and type declerations until order model is merged. remember to import new model. 

// createNew(){
    //   this.newCustomerInfo.createCustomer(this.newCustomer).subscribe(response =>{
    //     console.log(response);
    //   });
// transfered this to Login.ts to be used from the Customer model as a new customre profile 