import { CartItem } from "../cart-item/cart-item";

export class Customer {
    // customerId: number = 0;
    // firstName: string = "";
    // lastName: string = "";
    // address: string = "";
    // email: string = "";
    // phoneNumber: string = "";
    // creditCardNumber: string = "";
    // expiration: string = "";
    // ccvCode: string = "";
id: number = 0 ;
userName: string = '';
password: string = '';
isAdmin: boolean;
cartItems: CartItem ;
orders: CartItem ;
// do we need it to look like "List<CartItem>" if so why?

}

// transfer commented code when new order branch is merged