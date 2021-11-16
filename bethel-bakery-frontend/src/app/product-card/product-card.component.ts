import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../product/product.module';
import { ProductCardService } from '../services/product-card.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products: ProductModule[] = [];
  
  constructor(private productCardService: ProductCardService) { }

  ngOnInit(): void {
    this.productCardService.getProducts().subscribe(products => this.products = products);
  }

}
