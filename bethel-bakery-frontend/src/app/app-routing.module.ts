import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { LoginComponent } from './components/login/login.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
// import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';



const routes: Routes = [
  {
    path: 'cart',
    component: CheckoutComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  {
    path: 'shop',
    component: ProductCardsComponent
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },
<<<<<<< HEAD
=======
  {
    path: 'checkout',
    component: CartDetailsComponent,
  },
  // {
  //   path: 'checkout',
  //   component: CustomerDetailsComponent,
  // }
  {
    path: 'confirmation',
    component: ConfirmationComponent
  }
>>>>>>> eaaa4d243ec73f36e87ddc28c80243e6c301e244


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
