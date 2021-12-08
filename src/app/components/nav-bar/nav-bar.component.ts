import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

import { CartDataService } from 'src/app/services/cart-data/cart-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  count: number = 0;

  constructor(private cartDataService: CartDataService, private authService: AuthService) { }

  ngOnInit(): void {
    // this.getQtyTotal()
    // this.getQtyTotal()  
  }

  logOut(){
    this.authService.logOut();
  }
//   getQtyTotal (): void {
//     this.count = this.cartDataService.getTotalInCart();
//     console.log(this.count);
  } 
