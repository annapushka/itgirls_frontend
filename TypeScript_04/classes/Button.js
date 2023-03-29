"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Button = /** @class */ (function () {
    function Button(id) {
        this.btn = document.getElementById(id);
    }
    Button.prototype.onClick = function (callback) {
        var _a;
        callback = callback ? callback : this.defaultHandler;
        (_a = this.btn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', callback);
    };
    Button.prototype.defaultHandler = function () {
        alert('Hi!');
    };
    return Button;
}());
exports.Button = Button;
