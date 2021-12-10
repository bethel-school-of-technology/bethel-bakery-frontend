import { CartItem } from "../cart-item/cart-item";
import { User } from "../user/user";

export class Order {
    id: number = 0;
    user: User = new User();
    cartItems: CartItem[] = [];
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phoneNumber: string = "";
    address: string = "";
    creditCardNumber: string = "";
    expiration: string = "";
    ccv: number = 0;
    subTotal: number = 0 ;
    total: number = 0 ;
    dateTimeStamp: string;
}