import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order/order';
import { AuthService } from './auth/auth.service';
import { CartItem } from '../models/cart-item/cart-item';
import { MoneyService } from './money/money.service';

const httpOptions = {
  headers: new HttpHeaders({'content-type ': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  //check backend URL//
  orderHistoryUrl: string = "http://localhost:8080/order-history"
  checkoutUrl: string = "http://localhost:8080/checkout"
  orderDetailsUrl: string = "http://localhost:8080/order-details"
  orderUrl: string = "http://localhost:8080/order"

  constructor(private http:HttpClient, private authService: AuthService, private moneyService: MoneyService) {}

  //Post request for new Order.
  addNewOrder(order: Order):Observable<Order>{
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {headers};
     return this.http.post<Order>(this.orderUrl, order, httpOptions);
   }

   
  getOrders ():Observable<Order[]>
  {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {headers};

    return this.http.get<Order[]>(this.orderUrl, httpOptions);
  }

  getOneOrder(id: number):Observable<Order>{
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {headers};

    return this.http.get<Order>(`${this.orderUrl}/${id}`, httpOptions);
  }


  //Submits the order to the backend
  submitOrder(order: Order) {
    let cartItems: CartItem[] = this.getCartItemsFromLocalStorage();
    
    order = this.addCartItemsToOrder(cartItems, order);

    order = this.calculateTotalAndSubTotal(order);

    order = this.setUser(order)
    console.log(order)
    this.addNewOrder(order).subscribe(response => {});
    
    this.deleteCartItemsByUserFromLocalStorage(order.user.userName);
  }
  
  //Gets the cartItems from local storage by user.
  getCartItemsFromLocalStorage(): CartItem[] {
    let cartItems: CartItem[] = JSON.parse(localStorage.getItem("cartItems"));
    let cartItemsByUser: CartItem[] = [];
    let currentUser: string = this.authService.currentUser.sub; 
      
    for(let i:number = 0; i < cartItems.length; i++){
      if(cartItems[i].user.userName === currentUser){
        cartItemsByUser.push(cartItems[i]);
      }
    }
    return cartItemsByUser;
  }

  //Adds cartItems to the order.
  addCartItemsToOrder(cartItems: CartItem[], order: Order):Order {
    order.cartItems = cartItems;
    return order;
  }

  //calculates the total and the subtotal for the order.
  calculateTotalAndSubTotal(order: Order):Order {
    let numbersToBeAdded: number[] = [];

    for(let i:number = 0; i < order.cartItems.length; i++){
      numbersToBeAdded.push(order.cartItems[i].subTotal);
    }
      
    order.subTotal = numbersToBeAdded.reduce(function(a,b){return a + b});

    order.total = this.moneyService.calculateTax(order.subTotal);

    return order;
  }

  //sets the user for the order
  setUser(order: Order): Order {
    order.user.userName = this.authService.currentUser.sub;
    return order;
  }

  //Deletes the cartItems by the user from the local storage 
  deleteCartItemsByUserFromLocalStorage(userName: string):void {
    let cartItems: CartItem[] = JSON.parse(localStorage.getItem("cartItems"));
    let currentUser: string = this.authService.currentUser.sub; 
    let newCartItems: CartItem[] = [];
    for(let i:number = 0; i < cartItems.length; i++){
      if(cartItems[i].user.userName != currentUser){
        newCartItems.push(cartItems[i]);
      }
    }

    localStorage.removeItem("cartItems");
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  }
  
  //Gets the array of cartitems from order.cartItems
  getCartItems(order:Order): CartItem[] {
    let cartItems: CartItem[] = [];

    for(let i: number = 0; i < order.cartItems.length; i++) {
      cartItems.push(order.cartItems[i]);
    }

    return cartItems;
  }

  checkNothingInCart(): boolean {
    let cartItems: CartItem[] = this.getCartItemsFromLocalStorage();
    if(cartItems.length === 0) {
      return true;
    } else {
      return false;
    }

  }

}
