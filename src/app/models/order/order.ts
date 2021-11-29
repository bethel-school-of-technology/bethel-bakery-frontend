import { CartItem } from "../cart-item/cart-item";
import { Customer } from "../customer/customer";

export class Order {
    orderId: number = 0;
    cartItems: CartItem = new CartItem;
    customer: Customer = new Customer; 
    subTotal: number = 0 ;
    total: number = 0 ;
    dateTimeStamp: Date ; 
}
