import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    OrderHistoryComponent,
    ShopComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    OrderHistoryRoutingModule,
    ShopRoutingModule,
    CartRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
