import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item/cart-item';




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

  saveProduct (productId: number): Observable<any> {
    return this.http.post<any>(this.addToCartUrl + "/" + productId + "/1", productId, httpOptions);
  }

  getCartItems ():Observable<CartItem[]> 
  {
    return this.http.get<CartItem[]>(this.cartUrl);
  }

  getTotalInCart = () :number => 
  {
    this.getCartItems().subscribe(response => this.cartItems = response);
    let totalQty:number = 0;
    for(var i = 0; i < this.cartItems.length; i++) {
      totalQty = totalQty + this.cartItems[i].productQuantity;
      
    }
    console.log(totalQty);
    return totalQty;
  } 

}
