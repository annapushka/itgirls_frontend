interface Country {
    name: {
        common: string
    }
}

type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

const getEntries = <T extends object>(obj: T) => Object.entries(obj) as Entries<T>;

const getCurrency = (obj: Object) => getEntries(getEntries(obj)[1])

export interface CountryInfo {
    capital: string[],
    flags: {
        png: string;
        alt: string;
    },
    currencies: [],
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
            currencies:  countryInfo.currencies.map((currency) => getCurrency(currency)),
            timezones: countryInfo.timezones,
            population: countryInfo.population,
        }))[0])
}