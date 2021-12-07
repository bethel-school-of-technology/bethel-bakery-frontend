import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item/cart-item';
import { Customer } from '../../models/customer/customer';
import { Order } from '../../models/order/order';
import { CartDataService } from '../../services/cart-data/cart-data.service';
import { LoginService} from '../services/LoginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser: User = new User();

  id: number = 0;
  userName: string = '';
  password: string = '';
  isAdmin: boolean;
  cartItems: CartItem ;
  orders: Order ;

  constructor(private newUserInfo: LoginService ) { }
  // will we need to access cardDataService in order to refference current users order history or just declare/import order history? is cartDataService soley for localStorage for active orders?

  ngOnInit(): void {
  }
  createNew() {
    this.newUserInfo.createUser(this.newUser).subscribe(response => {
      console.log(response);
    });
  // getUser(){
    
  // }
//  getUser() = click event to get user from Db
  }
  

}

// comment out code until Customer model is change after order model is merged and CustDet is uncommented 