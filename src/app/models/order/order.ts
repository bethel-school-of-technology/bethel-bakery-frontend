import { CartItem } from "../cart-item/cart-item";
import { Customer } from "../customer/customer";


export class Order {
    static order(order: any): string {
        throw new Error('Method not implemented.');
      }
    orderId: number = 0;
    cartItems: CartItem[] = [];
    customer: Customer = new Customer; 
    firstName: string = "";
    lastName: string = "";
    address: string = "";
    email: string = "";
    phoneNumber: string = "";
    creditCardNumber: string = "";
    expiration: string = "";
    ccv: string = "";
    subTotal: number = 0 ;
    total: number = 0 ;
    dateTimeStamp: Date ; 
   static orderInfo: any;
}