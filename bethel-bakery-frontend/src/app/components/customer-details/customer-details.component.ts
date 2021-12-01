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

  newCustomer: Customer = new Customer();
  newcartItem: CartItem[] = [];

  fristName: string = '';
  lastName: string = '';
  address: string = '';
  email: string = '';
  phoneNumber: number = 0;
  creditCardNumber: number = 0;
  expiration: string = '';


  constructor(private router: Router, private newCustomerInfo: CartDataService) {}


  ngOnInit(): void {
  }

  createNew(){
    this.newCustomerInfo.createCustomer(this.newCustomer).subscribe(response =>{
      console.log(response);
    });
  }
  getItems(product: Product): void {
    if (localStorage.getItem('cartItems') != null){
      this.newcartItem = JSON.parse(localStorage.getItem('cartItems'));
    }
  }

  }

