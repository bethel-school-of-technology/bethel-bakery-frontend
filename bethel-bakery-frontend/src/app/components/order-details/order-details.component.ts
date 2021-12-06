import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { Order } from '../../models/order/order';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  //Property
  
  id : any;
  oneOrder: Order = new Order();

  
  constructor(
    private orderService: OrderDetailsService,
    private location: Location,
    private route: ActivatedRoute,
    public order: Order,

    ) { }

  ngOnInit(): void {
    // this.getOneOrder();
  }

  
  // getOneOrder (): void {
  //   this.id = (this.route.snapshot.paramMap.get(this.id));
  //   this.orderService.getOrders(this.id).subscribe(order => this.oneOrder = order);
  // }

  goBack(): void {
    this.location.back();
  }

}