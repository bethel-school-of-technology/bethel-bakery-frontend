import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
