import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { ProductModule } from '../product/product.module';

const httpOptions = 
{
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({providedIn: 'root'})
export class ProductCardService {

  productUrl: string = "http://localhost:8080/product"
  constructor(private http: HttpClient) { }

  //Methods
  getProducts = ():Observable<ProductModule[]>=>
  {
    return this.http.get<ProductModule[]>(this.productUrl);
  }
}
