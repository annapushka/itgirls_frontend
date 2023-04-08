interface Country {
    name: {
            common: string
    }
}

export interface CountryInfo {
    capital: string[];
    flags: {}
    currencies: {},
    timezone: string[],
    population: number
}

export const getCountries = () => {
    return fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(res => res.map((country: Country) => country.name.common))
}

export const getCountryInfo = (name: string) => {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then(res => res.json())
            .then(res => res.map((countryInfo: CountryInfo) => ({capital: countryInfo.capital, flags: countryInfo.flags, currencies: countryInfo.currencies, timezone: countryInfo.timezone, population: countryInfo.population})))
}