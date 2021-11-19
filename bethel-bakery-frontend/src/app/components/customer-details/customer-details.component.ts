import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Customer } from 'src/app/models/customer/customer';
import { CartDataService } from 'src/app/services/cart-data/cart-data.service';
=======
>>>>>>> eaaa4d243ec73f36e87ddc28c80243e6c301e244

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

<<<<<<< HEAD
  newCustomer: Customer = new Customer();

  constructor(private newCusomerService: CartDataService) { }
=======
  constructor(private router: Router) {}

>>>>>>> eaaa4d243ec73f36e87ddc28c80243e6c301e244

  ngOnInit(): void {
  }
  btnClick =  () => {
    this.router.navigateByUrl('/confirmation.component.html');
    // subscribe?


<<<<<<< HEAD
  createNew(){
    this.newCusomerService.newCustomer(this.newCustomer).subscribe(response =>{
      console.log(response);
    })
  }

=======
 }
>>>>>>> eaaa4d243ec73f36e87ddc28c80243e6c301e244
}
