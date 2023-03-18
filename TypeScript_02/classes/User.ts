import { Order } from './Order.js'

@generateId
export class User {
    _name: string;
    @readable()
    registrationDate: Date;
    _orderHistory: Array < Order > ;

    constructor(name: string, orderHistory: Array < Order > , registrationDate: Date) {
        this._name = name;
        this.registrationDate = registrationDate;
        this._orderHistory = orderHistory;
    }

    get name(): string {
        return this._name;
    }

    set orderHistory(order: Order) {
        this._orderHistory.push(order);
    }
}

function generateId < T extends {
    new(...args: any[]): {}
} > (target: T) {
    const randomId = Math.ceil(Math.random() * 1000);
    return class extends target {
        userId: number;
        constructor(...args: any[]) {
            super(...args);
            this.userId = randomId;
        }
    }
}


function readable() {
    return function (target: Object, propertyKey: string) {
        let value: Date;
        const getter = function () {
            return value;
        };
        const setter = function (newVal: Date) {
            if (value) {
                console.error('Registration date cannot be changed')
            } else {
                value = newVal
            }

        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}




