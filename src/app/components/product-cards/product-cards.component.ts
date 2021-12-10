import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { CartDataService } from 'src/app/services/cart-data/cart-data.service';
import { ProductDataService } from 'src/app/services/product-data/product-data.service';
import { CartItem } from 'src/app/models/cart-item/cart-item';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  // Properties
  products: Product[] = [];
  price: number = 0;
  
  // Constructor
  constructor(private productService: ProductDataService, private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  //localstorage?
  AddItemToCart(product: Product):void {
    this.cartDataService.addCartItemToLocalStorage(product);
    alert(this.createMessage(product));
  }
  
  



  getProducts = () => {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  createMessage(product: Product): string {
    return product.name + " was added to cart!";
  }
}
