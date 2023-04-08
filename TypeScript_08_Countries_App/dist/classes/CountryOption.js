import { Component } from "./Component.js";
export class CountryOption extends Component {
    constructor(value) {
        super('country-option', 'country', false, value);
        this.value = value;
        this.configure();
        this.renderContent();
    }
    configure() { }
    renderContent() {
        this.element.textContent = this.value;
    }
}
//# sourceMappingURL=CountryOption.js.map