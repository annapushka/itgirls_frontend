import { getCountryInfo } from "../helpers.js";
import { Component } from "./Component.js";
import { CountryCard } from "./CountryCard.js";

export class Search extends Component < HTMLDivElement, HTMLFormElement > {

    countryInput: HTMLSelectElement;

    constructor() {
        super('country-search', 'app', true, 'user-search');
        this.countryInput = this.element.querySelector('#country') as HTMLSelectElement;
        this.configure();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    renderContent(): void {}

    clearCard() {
        const element = document.getElementById("country-info");
        element?.remove();
    }

    private async submitHandler(event: SubmitEvent ) {
        event.preventDefault();
        this.clearCard();
        const country = this.countryInput.value;
        const countryInfo = await getCountryInfo(country);
        new CountryCard(countryInfo, country)   
    }
}
