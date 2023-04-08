import { CountryInfo } from "../helpers.js";
import { Component } from "./Component.js";


export class CountryCard extends Component < HTMLUListElement, HTMLLIElement > {
    capital: string;

    constructor(value: CountryInfo) {
        super('country-card', 'app', false, value.capital[0]);

        this.capital = value.capital[0];
        this.configure();
        this.renderContent();
    }

    

    configure() {}

    renderContent() {
        
        this.element.querySelector('h5') !.textContent = this.capital.toLocaleUpperCase();
    }
}