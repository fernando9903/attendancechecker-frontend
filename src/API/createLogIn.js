// /src/actions/blogPostActions.js

import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import SignInError from './../Components/SignInError'

import Home from './../Components/Home'
//import unfetch from 'unfetch';


export default function createLogIn(props)  {
 
    try {
       fetch (`http://localhost:3000/profesor/${(props.select.correo)}/${(props.select.contraseña)}`)
                  .then(res=> res.text()).then(pokemon => {
                    
                    console.log("ESTO FUE LO QUE REGRESO")
                    console.log(pokemon);
                    
                    if(pokemon!="{\"message\":\"NOT FOUND\"}"){
                    ReactDOM.render(
                      <React.StrictMode>
                        <Home/>
                      </React.StrictMode>,
                      document.getElementById('root')
                    );
                  }else{
                    ReactDOM.render(
                    <React.StrictMode>
                        <SignInError/>
                      </React.StrictMode>,
                      document.getElementById('root'));
                  } });

      } catch (error) {
        return console.error(error)
      }
      return "hola"
}
