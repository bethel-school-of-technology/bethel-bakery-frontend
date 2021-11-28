import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { Customer } from 'src/app/models/customer/customer';
import { CartDataService } from 'src/app/services/cart-data/cart-data.service';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  newCustomer: Customer = new Customer();
  // newDetail: Detail = new Detail();
  // private _url: string = '';

  constructor(private router: Router, private newCustomerInfo: CartDataService, private http: HttpClient) { }


  ngOnInit(): void {
    // this.getInfo();
  }

  createNew() {
    this.newCustomerInfo.createCustomer(this.newCustomer).subscribe(response => {
      console.log(response);
    });
    // tslint:disable-next-line: typedef
    // getInfo = () => {
    //   this.httpClient.get();
    // };

  }


  //  return this.router.navigateByUrl('/confirmation.component.html');


}


