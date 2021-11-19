import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer/customer';
import { CartDataService } from 'src/app/services/cart-data/cart-data.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  newCustomer: Customer = new Customer();

  constructor(private newCusomerService: CartDataService) { }

  ngOnInit(): void {
  }

  createNew(){
    this.newCusomerService.newCustomer(this.newCustomer).subscribe(response =>{
      console.log(response);
    })
  }

}
