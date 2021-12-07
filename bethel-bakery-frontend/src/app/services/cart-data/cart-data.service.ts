import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item/cart-item';
import { Customer } from 'src/app/models/customer/customer';
import { Product } from 'src/app/models/product/product';
import { MoneyService } from '../money/money.service';

 
const httpOptions = {
  
  headers: new HttpHeaders({'Content-type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})

//Service for managing the data of cartItems
export class CartDataService {
  cartItems: CartItem[] = [];
  cartUrl = "";
  addToCartUrl = "";

  constructor(private http: HttpClient, private moneyService: MoneyService) { }

  addCartItemToLocalStorage(product: Product): void {

    //checks to see if there is any items in cartItems
    if(localStorage.getItem("cartItems") != null){
      this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }

    //Checks to see if product already exist in cart
    let foundProduct: Boolean = false;
    let productIndex: number = 0;
    for(let i: number = 0; i < this.cartItems.length; i++){
      if(this.cartItems[i].product.id === product.id){
        foundProduct = true;
        productIndex = i;
      }
    }

    //if there product does exist in array than increase quantity
    if(foundProduct == true){
      this.cartItems[productIndex].productQuantity++;
      this.cartItems[productIndex].subTotal = this.moneyService.calculateSubTotal     (this.cartItems[productIndex]);

    }
    //if product does not exist in array than create a new cart item.
    else {
      let newCartItem: CartItem = new CartItem();
      newCartItem.product = product;
      newCartItem.productQuantity = 1;
      newCartItem.subTotal = product.price;
      this.cartItems.push(newCartItem);
    }

    //sore to local storage
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));

    //debug
    this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log("New Set:")
    console.log(this.cartItems);
    console.log("");
  }

  saveProduct (productId: number): Observable<any> {
    return this.http.post<any>(this.addToCartUrl + "/" + productId + "/1", productId, httpOptions);
  }

  createCustomer(newCustomer: Customer) : Observable<Customer>{
    return this.http.post<Customer>(this.cartUrl, newCustomer)
  }
}