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
  

  //This function should be working if the database is running and the "key" is updated. It will generate null otherwise.
  ngOnInit(): void {
    this.getCartItem(this.newCartItemOne);
    document.getElementById("cartDetailsName").innerHTML = this.newCartItemOne.product.name;
    document.getElementById("cartDetailsPrice").innerHTML = this.newCartItemOne.product.price.toString();
  }

  //Set key to the actual key in order for this to !null. newCartItemOne should now have JSON properties.
  getCartItem(newCartItemOne): CartItem {
    this.newCartItemOne = JSON.parse(localStorage.getItem("key"));
    return newCartItemOne;
  }
}
