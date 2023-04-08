
import { CountryOption } from "./classes/CountryOption.js";
import { Search } from "./classes/Search.js";
import { getCountries } from "./helpers.js";





document.addEventListener('DOMContentLoaded', async () => {
        const countries = await getCountries()
        const search = new Search();
        countries.forEach((country: string) => new CountryOption(country))
        console.log(search);
});