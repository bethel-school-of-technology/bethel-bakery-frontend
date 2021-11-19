import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { CartDataService } from 'src/app/services/cart-data/cart-data.service';
import { ProductDataService } from 'src/app/services/product-data/product-data.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  //Properties
  products: Product[] = [];
  price: number = 0;

  //Constructor
  constructor(private productService: ProductDataService, private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  
  // addProductToCart = (productIndex: number) => {
  //   this.getProducts();
  //   console.log(this.products);
  //   this.cartDataService.saveProduct(this.products[productIndex].productId).subscribe(
  //     response => {
  //       let num: number = this.cartDataService.getTotalInCart();
  //     });
  // }
  
  getProducts = () => {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  
}
