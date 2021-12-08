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
import { FormsModule } from '@angular/forms';
import { Order } from './models/order/order';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { SignUpComponent } from './components/sign-up/sign-up/sign-up.component';







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
    ConfirmationComponent,
    OrderDetailsComponent,
    SignUpComponent
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
