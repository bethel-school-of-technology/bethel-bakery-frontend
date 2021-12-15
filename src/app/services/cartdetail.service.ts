import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item/cart-item';
import { MoneyService } from './money/money.service';

@Injectable({
  providedIn: 'root'
})
export class CartdetailService {

  constructor(private moneyService : MoneyService) { }
  delete(cartItem: CartItem, cartItemsFromLocalStorage: CartItem[]){

    for (let i : number = 0 ; i < cartItemsFromLocalStorage.length;i++){
      if(cartItemsFromLocalStorage[i].product.id === cartItem.product.id){
        if(cartItemsFromLocalStorage[i].productQuantity > 1){
          cartItemsFromLocalStorage[i].productQuantity --;
          cartItemsFromLocalStorage[i].subTotal = this.moneyService.calculateSubTotalFromSingleCartItem( 
            cartItemsFromLocalStorage[i]
            )
        }
        else {
          cartItemsFromLocalStorage.splice(i,1);
        }
      }
    }
   localStorage.setItem("cartItems", JSON.stringify(cartItemsFromLocalStorage));
    
  }




 }


