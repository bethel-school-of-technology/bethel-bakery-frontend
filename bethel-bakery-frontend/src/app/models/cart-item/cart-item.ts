import { Product } from "../product/product";
import { Customer } from "../customer/customer"

export class CartItem {
    cartItemId: number = 0;
    product: Product = new Product;
    productQuantity: number = 0;  
    subTotal: number = 0;
    customer: Customer = new Customer
}