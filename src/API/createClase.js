// /src/actions/blogPostActions.js

import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './../Components/SignIn';
import SignUp from './../Components/SignUpExistente';
//import unfetch from 'unfetch';

// * snip *
export default function createPOST(data) {
    //const f= unfetch.bind()
    try {
        fetch (`http://localhost:3000/clase/`, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },method: "post", body: JSON.stringify(data).slice(10, -1)})
                   .then(res=> {
                        console.log("entro post");
                        console.log(JSON.stringify(data).slice(10, -1))
                        if(res.status=="201")
                        {
                            ReactDOM.render(
                                <React.StrictMode>
                                    <SignIn/>
                                  </React.StrictMode>,
                                  document.getElementById('root'));
                        }
                   }
 
                   ); 
                }catch (error) {
          console.log(error);
       }
       return "hola"
}
