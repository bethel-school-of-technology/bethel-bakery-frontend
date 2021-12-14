import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartdetailService {

  constructor() { }
  delete(cartItem: CartItem, cartItemsFromLocalStorage: CartItem[]){

    for (let i : number = 0 ; i < cartItemsFromLocalStorage.length;i++){
      if(cartItemsFromLocalStorage[i].product.id === cartItem.product.id){
        cartItemsFromLocalStorage.splice(i,1);
      }
    }
   localStorage.setItem("cartItems", JSON.stringify(cartItemsFromLocalStorage));
    
  }
}

