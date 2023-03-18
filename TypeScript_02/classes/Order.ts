import { Item } from './Item.js';

export class Order {
    items: Array < Item > ;

    constructor(items: Array < Item > ) {
        this.items = items;
    }
}