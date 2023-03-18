var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let User = class User {
    constructor(name, orderHistory, registrationDate) {
        this._name = name;
        this.registrationDate = registrationDate;
        this._orderHistory = orderHistory;
    }
    get name() {
        return this._name;
    }
    set orderHistory(order) {
        this._orderHistory.push(order);
    }
};
__decorate([
    readable(),
    __metadata("design:type", Date)
], User.prototype, "registrationDate", void 0);
User = __decorate([
    generateId,
    __metadata("design:paramtypes", [String, Array, Date])
], User);
export { User };
function generateId(target) {
    const randomId = Math.ceil(Math.random() * 1000);
    return class extends target {
        constructor(...args) {
            super(...args);
            this.userId = randomId;
        }
    };
}
function readable() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (value) {
                console.error('Registration date cannot be changed');
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
