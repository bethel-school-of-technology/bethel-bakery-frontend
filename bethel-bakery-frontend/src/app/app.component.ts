import { Component } from '@angular/core';
import { CartDataService } from './services/cart-data/cart-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bethel-bakery-frontend';
  count=0;

  constructor(private cartDataService: CartDataService) {}
  counter()
  {
    
  }

}
