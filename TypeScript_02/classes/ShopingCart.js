"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopingCart = void 0;
var Order_js_1 = require("./Order.js");
var ShopingCart = exports.ShopingCart = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _addToShopingCart_decorators;
    return _a = /** @class */ (function () {
            function ShopingCart() {
                this.goodsList = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.goodsList = [];
            }
            ShopingCart.prototype.addToShopingCart = function (item) {
                this.goodsList.push(item);
            };
            ShopingCart.prototype.createOrder = function () {
                return new Order_js_1.Order(this.goodsList);
            };
            return ShopingCart;
        }()),
        (function () {
            _addToShopingCart_decorators = [printItem()];
            __esDecorate(_a, null, _addToShopingCart_decorators, { kind: "method", name: "addToShopingCart", static: false, private: false, access: { has: function (obj) { return "addToShopingCart" in obj; }, get: function (obj) { return obj.addToShopingCart; } } }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
function printItem() {
    return function (target, method, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            console.log(args);
        };
    };
}
