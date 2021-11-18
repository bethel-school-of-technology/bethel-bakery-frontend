import { Component } from '@angular/core';
import { CartDataService } from './services/cart-data/cart-data.service';
import { Money } from './money/money.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bethel-bakery-frontend';
  count=0;

  constructor(private cartDataService: CartDataService) {
  }
  counter()
  {
    
  }

  public testCode(): void {
    let num: number[] = [8,6,4,88,60];
    console.log(Money.formatNumberToMoney(0.6));
  }
}
