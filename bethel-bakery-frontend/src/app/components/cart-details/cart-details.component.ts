import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item/cart-item';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

newCartItemOne: CartItem = new CartItem();
 

  constructor() { }
  

  ngOnInit(): void {
  }

  getCartItem(newCartItemOne){
    this.newCartItemOne = JSON.parse(localStorage.getItem("key"));
    return newCartItemOne;
  }
}
