import { Component, Injectable, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item/cart-item';
import { Product } from 'src/app/models/product/product';
import { CartdetailService } from 'src/app/services/cartdetail.service';
import { MoneyService } from 'src/app/services/money/money.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  items: CartItem[] = [];
  isCartEmpty: boolean = false; 
  newCartItemOne = new CartItem();
  newCartItemTwo = new CartItem();
  subTotal:number = 10.56;
  total:number = 12.78;
  tax: number = 3.89;
//I am working on an array complete with if statement and loop to check contents of local storage and load all objects. Due to the way localstorage works with keys...
//It appears that all keys will need to be saved into variables, and stored into an array, and then I can run a loop on the array to load the whole cart.

//keyArray:string[] = ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"]; //TL:DR This code is for debugging and will not be used.
//itemCheck = this.keyArray.filter(keyArray => this.keyArray);

//For adding the next line of item(s).
//newItemNameDiv = document.getElementById("cartDetailsContainer").appendChild(document.createElement('div')); //DOM code...Do not use!
//newItemPriceDiv = document.getElementById("cartDetailsContainer").appendChild(document.createElement('div'));

//Constructor is used to build items into storage for later retreaval. You will want to comment this out this storage function, or inject your own object.
//If injecting your own object, you can leave the rest of the code the same.                                      
  constructor(
    private orderDetailsService: OrderDetailsService, 
    private cartDetailService: CartdetailService

    ) {
   
        //For testing...can use to proof the array works and local storage works.
    // localStorage.setItem("item1",JSON.stringify(this.newCartItemTwo) ) 
        //Putting two items in with the same key, producing two items, meaning item1 is correctly builing array.
    
    
    //For Debugging
    //console.log(this.itemCheck);
    /*if (this.keyArray = null){
      console.log("keyArray: Empty");
    }
  */
 }
  

  //This function should be working if the database is running and the "key" is updated. It will generate null otherwise.
  ngOnInit(): void {
   if(!this.orderDetailsService.checkNothingInCart()){
    this.items = this.orderDetailsService.getCartItemsFromLocalStorage();
   }



   


    // this.getCartItem(this.newCartItemOne);
    // this.getCartItem(this.newCartItemTwo);
    //This code is used for the DOM and is not currently implemented.
    //document.getElementById("cartDetailsName").innerHTML = this.newCartItemOne.product.name;
    //document.getElementById("cartDetailsPrice").innerHTML = this.newCartItemOne.product.price.toString();
    // console.log(this.newCartItemOne);
    // console.log(this.newCartItemTwo);
    // this.items.push(this.newCartItemOne,this.newCartItemTwo); //"Items" object is currently empty, and you can see two blank "new CartItems" are created and pushed into it
    //^^ This code ^^  must be changed if you are using new objects. If you read the constructor comment, and changed that, instead, you can leave this.
    //The correct items will show and the extra item will return null and should be okay.
    // console.log(this.items);
  }

  delete(item): void{
   this.cartDetailService.delete(item,this.items);
  }
  //Set key to the actual key in order for this to !null. newCartItemOne should now have JSON properties.
  getCartItem(newCartItemOne): CartItem {
    this.newCartItemOne = JSON.parse(localStorage.getItem("item1")); //This is working to correctly bring whatever varaiable/array/object is pushed into "items" object.
    return newCartItemOne;                                            
  }


//Workimg on delete button still
  /*deleteCartItemClick(newCartItemOne): CartItem {
document.getElementById("deleteCartItemOne").onclick(deleteCartItemFromLocalStorage())
}
deleteCartItemFromLocalStorage(){
  this.keyArray.reduce();
}*/
}