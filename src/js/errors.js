import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import { error } from '@pnotify/core/dist/PNotify';
import { defaults } from '@pnotify/core';


function matchesFoundError() {
    error({
        title: 'Too many matches found. Please enter a more specific query.'
          });
}

function fetchError() {
    error({
        title: 'Something went wrong'
    });
}

function nameError(input) {
    error({
      title: `Country name " ${input} " was not found`,
      
  });
}

defaults.delay = 3000;

export { matchesFoundError, fetchError, nameError };