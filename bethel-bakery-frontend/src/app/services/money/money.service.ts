import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item/cart-item';

@Injectable({
  providedIn: 'root'

    
        
})
export class MoneyService {
  private tax:number = .07;
  constructor() { }
  //Takes an amount and * by 100 (example 12.89 = 1289)
  public convertMoneyToNumber(amount:number):number {
    return amount * 100;
  }
  //Takes a number and / by 100 and rounds to two places 
  //(example 1289.8 = 12.90 )
  public convertNumberToMoney(amount:number):number{
    amount = amount / 100;
    return Math.round((amount + Number.EPSILON) * 100) / 100;
  }

  //add up an array of numbers and returns the sum
  //Make sure money is in correct format(28.89 should be 2889)
  public calculateSubTotal(cartItem: CartItem): number {
    return cartItem.productQuantity * cartItem.product.price;
  }

  //calculate the a number befor tax. 

    
          
            
    

          
    
    
  
  //Make sure money is in correct format(28.89 should be 2889)
  public calculateTax(amount: number): number {
    return amount + (amount * this.tax)
  }
}