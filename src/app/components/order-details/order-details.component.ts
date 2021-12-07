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
  oneOrder: any;

  
  constructor(
    private orderService: OrderDetailsService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

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