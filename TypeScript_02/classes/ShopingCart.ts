import { Item } from './Item.js';
import { Order } from './Order.js';

export class ShopingCart {
    goodsList: Array < Item > ;

    constructor() {
        this.goodsList = [];
    }

    @printItem()
    addToShopingCart(item: Item) {
        this.goodsList.push(item);
    }

    createOrder() {
        return new Order(this.goodsList);
    }

}


function printItem() {
    return function (target: Object, method: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any) {
            const result = originalMethod.apply(this, args);
            console.log(args);
        }
    }
}