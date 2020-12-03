// /src/actions/blogPostActions.js

import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './../Components/Home2';
import SignUp from './../Components/SignUpExistente';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

//import unfetch from 'unfetch';

import createInscrito from './createInscrito';

// * snip *
export default function createPOST(data) {
    //const f= unfetch.bind()
    try {
        fetch (`http://localhost:3000/alumno/`, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },method: "post", body: JSON.stringify(data).slice(10, -35)+'}'})
                   .then(res=> {
                        console.log("entro post");
                        console.log(data.select.id)
                        console.log(JSON.stringify(data).slice(10, -35)+'}')
                        if(res.status=="201")
                        {
                            var usuario = {
                                id_alumno: data.select.id,
                                  id_clase: data.select._id,
                              }
                            createInscrito(usuario)
                            
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
