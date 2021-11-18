import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bethel-bakery-frontend';
  count = 0;
  // tslint:disable-next-line: typedef
  counter()
  {
    this.count++;
  }

}
