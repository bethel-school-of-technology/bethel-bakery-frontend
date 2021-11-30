import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order/order';
import { OrderDataService } from 'src/app/services/order-data/order-data.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  order: Order = new Order();


  constructor(private router: Router, private newOrder: OrderDataService) {}


  ngOnInit(): void {
  }

  createNew(){
    this.newOrder.createOrder(this.newOrder).subscribe(response =>{
      console.log(response);
    })
  }


  btnClick =  () => {
    this.router.navigateByUrl('/confirmation.component.html');
    // subscribe?
  }
}
