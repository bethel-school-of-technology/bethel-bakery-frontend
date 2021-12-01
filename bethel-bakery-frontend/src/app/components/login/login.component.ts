import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item/cart-item';
import { Customer } from 'src/app/models/customer/customer';
import { CartDataService } from 'src/app/services/cart-data/cart-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newCustomer: Customer = new Customer();

  id: number = 0;
  userName: string = '';
  password: string = '';
  isAdmin: boolean;
  cartItems: CartItem ;
  orders: CartItem ;

  constructor(private newCustomerInfo: CartDataService) { }
  // will we need to access cardDataService in order to refference current users order history or just declare/import order history? is cartDataService soley for localStorage for active orders?

  ngOnInit(): void {
  }
  createNew() {
    this.newCustomerInfo.createCustomer(this.newCustomer).subscribe(response => {
      console.log(response);
    });
 
  }
  Customer(id: number, userName: string, password: string, isAdmin: boolean, cartItems: CartItem , orders: CartItem) {
      
  }

}

// comment out code until Customer model is change after order model is merged and CustDet is uncommented 