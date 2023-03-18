import { Order } from './Order.js';
export declare class User {
    _name: string;
    registrationDate: Date;
    _orderHistory: Array<Order>;
    constructor(name: string, orderHistory: Array<Order>, registrationDate: Date);
    get name(): string;
    set orderHistory(order: Order);
}
