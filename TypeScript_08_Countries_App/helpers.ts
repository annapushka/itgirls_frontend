interface Country {
    name: {
        common: string
    }
}

type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

const getEntries = <T extends object>(obj: T) => Object.entries(obj) as Entries<T>;


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

export const getCountries = (): Promise<string[]>  => {
    return fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(res => res.map((country: Country) => country.name.common))
}

export const getCountryInfo = (name: string): Promise<CountryInfo> => {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(res => res.json())
        .then(res => res.map((countryInfo: CountryInfo) => ({
            capital: countryInfo.capital,
            flags: countryInfo.flags,
            currencies:  getEntries(countryInfo.currencies),
            timezones: countryInfo.timezones,
            population: countryInfo.population,
        }))[0])
}