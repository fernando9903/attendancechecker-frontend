// /src/actions/blogPostActions.js

import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './../Components/Home'
//import unfetch from 'unfetch';


export default function createLogIn(props)  {
 
    try {
       fetch (`http://localhost:8080/Profesores2/prof/${(props.select.contraseña)}/${(props.select.usuario)}/${(props.select.correo)}`)
                  .then(res=> res.text()).then(pokemon=> {if(pokemon=="true"){
                    ReactDOM.render(
                      <React.StrictMode>
                        <Home/>
                      </React.StrictMode>,
                      document.getElementById('root')
                    );
                  } });

      } catch (error) {
        return console.error(error)
      }
      return "hola"
}
