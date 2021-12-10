import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoneyService } from 'bethel-bakery-frontend/src/app/services/money/money.service';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item/cart-item';
import { Product } from 'src/app/models/product/product';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  cartUrl: string = "http://localhost:8080/cartitem"

  cartItems: CartItem[] = [];

  constructor(private http: HttpClient, private moneyService: MoneyService, private authService: AuthService) { }

  addCartItemToLocalStorage(product: Product): void {

    //checks to see if there is any items in cartItems
    if(localStorage.getItem("cartItems") != null){
      this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
    
    //Checks to see if product already exist in cart
    let foundProduct: Boolean = false;
    let productIndex: number = 0;
    let currentUser: string = this.authService.currentUser.sub;

    for(let i: number = 0; i < this.cartItems.length; i++){
      let cartItemProductId: number = this.cartItems[i].product.id;
      let cartItemUser: string = this.cartItems[i].user.userName;
      if(cartItemProductId === product.id && cartItemUser === currentUser){
        foundProduct = true;
        productIndex = i;
      }
    }
    
    //if the product does exist in array than increase quantity
    if(foundProduct == true){
       
      this.cartItems[productIndex].productQuantity++;
      this.cartItems[productIndex].subTotal = this.moneyService.calculateSubTotal       (this.cartItems[productIndex]);
      
    }

    //if product does not exist in array than create a new cart item.
    else {
      let userName: string = this.authService.currentUser.sub;
      console.log(userName);
      let newCartItem: CartItem = new CartItem();
      newCartItem.product = product;
      newCartItem.productQuantity = 1;
      newCartItem.subTotal = product.price;
      newCartItem.user.userName = userName;
      this.cartItems.push(newCartItem);
    }

    //sore to local storage
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }

  addCartItem (cartItem: CartItem): Observable<CartItem> {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {headers};

    return this.http.post<CartItem>(this.cartUrl, cartItem, httpOptions);
  }

  addManyCartItems(cartItems: CartItem[]) {
    for(let i: number = 0; i < cartItems.length; i++){
      this.addCartItem(cartItems[i]).subscribe( response => {});
    }
  }
}

  // getTotalInCart = () :number => 
  // {
  //   this.getCartItems().subscribe(response => this.cartItems = response);
  //   let totalQty:number = 0;
  //   for(var i = 0; i < this.cartItems.length; i++) {
  //     totalQty = totalQty + this.cartItems[i].productQuantity;
      
  //   }
  //   console.log(totalQty);
  //   return totalQty;
  // } 

