import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Order } from 'src/app/models/order/order';
import { OrderDataService } from 'src/app/services/order-data/order-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  //Property
  oneOrder: any;
  id : any;
  
  constructor(private orderService: OrderDataService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneOrder();
  }

  
  getOneOrder (): void {
    this.oneOrder = (this.route.snapshot.paramMap.get(this.id));
    this.orderService.getOneOrder(this.id).subscribe(order => this.oneOrder = order);
  }

  goBack(): void {
    this.location.back();
  }

}
