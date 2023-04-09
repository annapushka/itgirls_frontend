interface Country {
    name: {
        common: string
    }
}

export interface CountryInfo {
    capital: string[],
    flags: {
        png: string;
        alt: string;
    },
    currencies: {},
    timezones: string[],
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
        .then(res => res.map((countryInfo: CountryInfo) => ({
            capital: countryInfo.capital,
            flags: countryInfo.flags,
            currencies: countryInfo.currencies,
            timezones: countryInfo.timezones,
            population: countryInfo.population,
            info: countryInfo
        }))[0])
}