import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../models/cart-item/cart-item';
import { Customer } from '../models/customer/customer';
import { Product } from '../models/product/product';
// import { LocalStorageService } from './services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // tslint:disable-next-line: no-unused-expression
   LS: LS[] = [CartItem, Product, Customer];
   myValue = localStorage.getItem('LS');

  constructor(private router: Router, ) { }

function LS() {
  this.LS.
}
}
