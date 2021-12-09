import { Product } from "../product/product";
import { User } from "../user/user";
export class CartItem {
    cartItemId: number = 0;
    product: Product = new Product;
    productQuantity: number = 0;  
    subTotal: number = 0;
    user: User = new User();  
}
