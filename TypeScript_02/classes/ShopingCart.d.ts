import { Item } from './Item.js';
import { Order } from './Order.js';
export declare class ShopingCart {
    goodsList: Array<Item>;
    constructor();
    addToShopingCart(item: Item): void;
    createOrder(): Order;
}
