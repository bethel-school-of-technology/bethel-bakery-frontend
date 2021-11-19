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
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { ConfirmationComponent } from './confirmation/confirmation.component';
>>>>>>> eaaa4d243ec73f36e87ddc28c80243e6c301e244




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
<<<<<<< HEAD
    ConfirmationComponent


=======
>>>>>>> 8b1f51e13849df27d794cf2b295329f02cd8cdcd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
