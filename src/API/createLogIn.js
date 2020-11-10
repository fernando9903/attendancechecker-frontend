// /src/actions/blogPostActions.js

import fetch from 'isomorphic-fetch';
//import unfetch from 'unfetch';

// * snip *
const responseApi = response =>{
    console.log(response)
    return response;
    }
export default function createLogIn(props)  {
 
    try {
       return fetch (`http://localhost:8080/Profesores2/prof/${(props.select.contraseña)}/${(props.select.usuario)}/${(props.select.correo)}`)
                  .then(res=> res.json()).then(responseApi);

      } catch (error) {
        console.error(error)
      }
}
