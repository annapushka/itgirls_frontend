const getEntries = (obj) => Object.entries(obj);
export const getCountries = () => {
    return fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(res => res.map((country) => country.name.common));
};
export const getCountryInfo = (name) => {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(res => res.json())
        .then(res => res.map((countryInfo) => ({
        capital: countryInfo.capital,
        flags: countryInfo.flags,
        currencies: getEntries(countryInfo.currencies),
        timezones: countryInfo.timezones,
        population: countryInfo.population,
    }))[0]);
};
//# sourceMappingURL=helpers.js.map