import { fetchError } from './errors';

export default function fetchCountries(countryName) {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`

    return fetch(url)
        .then(response => response.json())
        .catch(fetchError)
}