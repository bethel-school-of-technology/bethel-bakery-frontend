import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/models/auth-response';
import { User } from 'src/app/models/user/user';
import { LoginService } from 'src/app/services/login.service';
import { CartItem } from '../../models/cart-item/cart-item';
import { Customer } from '../../models/customer/customer';
import { Order } from '../../models/order/order';
import { CartDataService } from '../../services/cart-data/cart-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User;
  isInvalid: boolean = false;

  constructor(private newCustomerInfo: CartDataService, private loginData: LoginService, private router: Router) { }
  // will we need to access cardDataService in order to refference current users order history or just declare/import order history? is cartDataService soley for localStorage for active orders?

  ngOnInit(): void {
  }

  logIn() {
    this.loginData.logIn(this.user).subscribe( reponse => {
      localStorage.removeItem("authResponse");
      localStorage.setItem("authResponse", JSON.stringify(reponse));
      this.router.navigate(['/shop']);
    },
    error => {
      this.isInvalid = true;
    });
  }
  
  goToSignUp() {
    this.router.navigate(['sign-up']);    
  }

}

// comment out code until Customer model is change after order model is merged and CustDet is uncommented 