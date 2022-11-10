

export interface ApiResponse {
    error: boolean;
    msg: string;
    country: string;
    data: {
        iso2: string;
        iso3: string;
        counrty: string;
        cities: string[];
    }[]
}

export interface countryData {
    iso2: string;
    iso3: string;
    counrty: string;
    cities: string[];
}


export interface wheatherResponse {
    main: {
        temp: string,
        feels_like: string,
        temp_min: string,
        temp_max: string,
        pressure: string,
        humidity: string
    },
    wind: {
        deg: string
        gust: string
        speed: string
    },
    cod: number
}