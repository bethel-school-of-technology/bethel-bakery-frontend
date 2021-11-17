import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItemModule } from 'src/app/models/cart-item/cart-item.module';
import { ProductModule } from 'src/app/models/product/product.module';

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

  cartItems: CartItemModule[] = [];

  constructor(private http: HttpClient) { }

  saveProduct (productId: number): Observable<any> {
    return this.http.post<any>(this.addToCartUrl + "/" + productId + "/1", productId, httpOptions);
  }

  getCartItems ():Observable<CartItemModule[]> 
  {
    return this.http.get<CartItemModule[]>(this.cartUrl);
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
