// /src/actions/blogPostActions.js

import fetch from 'isomorphic-fetch';

// * snip *

export function createPOST(data) {
    return fetch('http://localhost:8080/Profesores2/webresources/profesores', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}
