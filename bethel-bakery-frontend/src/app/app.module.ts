import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductCardsComponent,
    NavBarComponent,
    CheckoutComponent,
    CartDetailsComponent,
    LoginComponent,
    OrderHistoryComponent,
    CustomerDetailsComponent,
    ConfirmationComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
