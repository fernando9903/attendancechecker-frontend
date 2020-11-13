// /src/actions/blogPostActions.js

import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './../Components/SignIn';
import SignUp from './../Components/SignUpExistente';
//import unfetch from 'unfetch';

// * snip *
export function createPOST(data) {
    //const f= unfetch.bind()
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', "*");
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');

     fetch('http://localhost:8080/Profesores2/prof', {
         mode: "cors",
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    }).then(res => res.text()
    ).
    catch(err =>
    {
        
        console.log(err);
        console.log(JSON.stringify(data))
    });
}
