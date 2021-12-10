import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product/product';

@Injectable({providedIn: 'root'})
export class ProductDataService {

  //Properties
  productUrl: string = "http://localhost:8080/product"
  
  constructor(private http: HttpClient) {}

  //Methods
  getProducts ():Observable<Product[]> 
  {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    
    const httpOptions = {headers};
    
    return this.http.get<Product[]>(this.productUrl, httpOptions);
  }
}
