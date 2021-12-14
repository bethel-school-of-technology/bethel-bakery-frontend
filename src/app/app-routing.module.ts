import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { LoginComponent } from './components/login/login.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { SignUpComponent } from './components/sign-up/sign-up/sign-up.component';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  
  {
    path: '', 
    redirectTo: 'landingPage',
    pathMatch: 'full'
  },
  {
    path: 'landingPage',
    component: LandingPageComponent
  },
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
    component: OrderHistoryComponent,
    canActivate: [AuthGuard],
  },
    // ConfirmationComponent --> checkout
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'order-details/:id',
    component: OrderDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
