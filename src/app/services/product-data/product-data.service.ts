import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product/product';



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
  getProducts ():Observable<Product[]> 
  {
    return this.http.get<Product[]>(this.productUrl);
  } 
}
