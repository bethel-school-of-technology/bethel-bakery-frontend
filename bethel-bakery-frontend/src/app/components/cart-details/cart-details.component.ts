import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item/cart-item';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

newCartItemOne: CartItem = new CartItem();
//I am working on an array complete with if statement and loop to check contents of local storage and load all objects. Due to the way localstorage works with keys...
//It appears that all keys will need to be saved into variables, and stored into an array, and then I can run a loop on the array to load the whole cart.
keyArray:string[] = [];
x = "";
 

  
  constructor() { }
//Working on a loop to provide the key values for the local storage...
  //Getting an error about using type keyArray as an injectable...will continue working on it.

   /*constructor(keyArray: { value: any; index: number; }, x: any) {
    while (keyArray != null){
      x = keyArray.value;
      keyArray.index ++;
      return x;
    }
    if (keyArray = null){
      console.log("keyArray: Empty");
    }
   }*/
  

  //This function should be working if the database is running and the "key" is updated. It will generate null otherwise.
  ngOnInit(): void {
    this.getCartItem(this.newCartItemOne);
    document.getElementById("cartDetailsName").innerHTML = this.newCartItemOne.product.name;
    document.getElementById("cartDetailsPrice").innerHTML = this.newCartItemOne.product.price.toString();
  }

  //Set key to the actual key in order for this to !null. newCartItemOne should now have JSON properties.
  getCartItem(newCartItemOne): CartItem {
    this.newCartItemOne = JSON.parse(localStorage.getItem(this.keyArray.values.toString())); //Really not sure about this, might revert to keyArray index, or otherwise.
    return newCartItemOne;
  }


/*deleteCartItemClick(newCartItemOne): CartItem {
document.getElementById("deleteCartItemOne").onclick(deleteCartItemFromLocalStorage())
}
deleteCartItemFromLocalStorage(){
  this.keyArray.reduce();
}*/
}