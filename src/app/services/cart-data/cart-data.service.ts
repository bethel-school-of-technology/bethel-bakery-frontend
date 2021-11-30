import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item/cart-item';
import { Customer } from 'src/app/models/customer/customer';
import { Order } from 'src/app/models/order/order';




const httpOptions = 
{
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  addToCartUrl: string = "http://localhost:8080/cart/add"
  cartUrl: string = "http://localhost:8080/cart"

  cartItems: CartItem[] = [];

  constructor(private http: HttpClient) { }

  // saveProduct (productId: number): Observable<any> {
  //   return this.http.post<any>(this.addToCartUrl + "/" + productId + "/1", productId, httpOptions);
  // }

  getCartItems ():Observable<CartItem[]> 
  {
    return this.http.get<CartItem[]>(this.cartUrl);
  }


}


