import './style.css';
import { fetchError } from './js/errors';
import fetchCountries from './js/fetchCountries.js';
import getRefs from './js/refs';
import { renderCountry, addMarkupToCardContainer } from './js/renderCountry';

import debounce from 'lodash.debounce';

const refs = getRefs();

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(evt) {

    addMarkupToCardContainer('');
    
    const searchQuery = evt.target.value;

    if (searchQuery === '') {
        return;
    }

    fetchCountries(searchQuery)
        .then(renderCountry)
        .catch(fetchError);
        
}





