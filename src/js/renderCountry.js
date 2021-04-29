import countryCardTpl from '../templates/country-card.hbs';
import countriesListTpl from '../templates/country-list.hbs';
import { matchesFoundError, nameError } from './errors';
import getRefs from './refs';

const refs = getRefs();

function renderCountry(data) {
    const countriesQuantity = data.length;

    if (countriesQuantity > 10) {

        matchesFoundError();
        return;

    } if (countriesQuantity >= 2 && countriesQuantity <= 10) {

        const listMarkup = countriesListTpl(data);
        addMarkupToCardContainer(listMarkup);
        return;

    } if (countriesQuantity === 1) {

        const countryMarkup = countryCardTpl(data);
        addMarkupToCardContainer(countryMarkup);
        
    } if (countriesQuantity === undefined) {

        nameError(refs.input.value);

    }
}

function addMarkupToCardContainer (markup) {
    refs.cardContainer.innerHTML = markup;
}

export { renderCountry, addMarkupToCardContainer };