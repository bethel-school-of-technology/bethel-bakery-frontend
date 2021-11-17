import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CartItemModule {
  cartId: number = 0;
  product: ProductModule = new ProductModule;
  productQuantity: number = 0;  
}
