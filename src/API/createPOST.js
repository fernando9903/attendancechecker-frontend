// /src/actions/blogPostActions.js

import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './../Components/Home';
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

     fetch('http://localhost:3000/profesor/', {
        mode: "cors",
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    }).then(res =>{
        console.log("Este es el resss");
        console.log(res.status)
        //res.text()
        if(res.status == "201") {
            ReactDOM.render(
                <React.StrictMode>
                    <SignIn/>
                  </React.StrictMode>,
                  document.getElementById('root'));
        }

        
    }).catch(err =>
    {
        console.log("ESTA ENTRANDO AL CATCH DEL CREAR")
        console.log(err);
    });
}
