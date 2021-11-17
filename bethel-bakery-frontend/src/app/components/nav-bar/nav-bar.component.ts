import { Component, OnInit } from '@angular/core';
import { CartItemModule } from 'src/app/models/cart-item/cart-item.module';
import { CartDataService } from 'src/app/services/cart-data/cart-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  count: number = 0;

  constructor(private cartDataService: CartDataService ) { }

  ngOnInit(): void {
    this.getQtyTotal()
    this.getQtyTotal()  
  }

  getQtyTotal (): void {
    this.count = this.cartDataService.getTotalInCart();
    console.log(this.count);
  } 

}
