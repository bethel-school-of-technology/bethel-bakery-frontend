import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { ProductModule } from '../models/product/product.module';

const httpOptions = 
{
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({providedIn: 'root'})
export class ProductDataService {

  //Properties
  productUrl: string = "http://localhost:8080/product"
  
  constructor(private http: HttpClient) {}

  //Methods
  getProducts ():Observable<ProductModule[]> 
  {
    return this.http.get<ProductModule[]>(this.productUrl);
  } 
}
