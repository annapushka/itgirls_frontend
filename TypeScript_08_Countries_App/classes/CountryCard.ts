import { CountryInfo } from "../helpers.js";
import { Component } from "./Component.js";


export class CountryCard extends Component < HTMLUListElement, HTMLLIElement > {
    capital: string;
    flags: {
        png: string;
        alt: string;
    };
    currencies: {};
    timezones: string[];
    population: number;
    name: string

    constructor(value: CountryInfo, country: string) {
        console.log(value)
        const {capital, currencies, flags, population, timezones} = value
        super('country-card', 'app', false, 'country-info');

        this.capital = capital[0];
        this.currencies = currencies;
        this.flags = flags;
        this.timezones = timezones;
        this.population = population;
        this.name = country;

        this.configure();
        this.renderContent();
    }

    

    configure() {}

    renderContent() {
        // const currencyName =  Object.entries(this.currencies).reduce((acc, [key, value]) => )

        this.element.querySelector('h5') !.textContent = this.name.toLocaleUpperCase();
        this.element.querySelector('.capital') !.textContent = `Capital: ${this.capital}`;
        // this.element.querySelector('.currency') !.textContent = `Currencies: ${this.currencies}`;
        this.element.querySelector('.timezone') !.textContent = `Timezones: ${this.timezones}`;
        this.element.querySelector('.population') !.textContent = `Population: ${this.population}`;
        this.element.querySelector('img') !.src = this.flags.png;
        this.element.querySelector('img') !.alt = this.flags.png;
    }
}