import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  //Properties
  products: ProductModule[] = [];

  //Constructor
  constructor(private productService: ProductDataService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
    console.log("hi");
    
  }

}
