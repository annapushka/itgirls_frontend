import { Component } from "./Component.js";
export class Button extends Component {
    constructor(hostId) {
        super('btn', hostId, true, 'search-btn');
        this.btn = document.getElementById('search-btn');
        this.configure();
        this.renderContent();
    }
    configure() { }
    renderContent() {
    }
    onClick(callback) {
        var _a;
        callback = callback ? callback : this.defaultHandler;
        (_a = this.btn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', callback);
    }
    defaultHandler() {
        alert('Пока всем мирам!');
    }
}
//# sourceMappingURL=Button.js.map