// /src/actions/blogPostActions.js

import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './../Components/Home2';
import SignUp from './../Components/SignUpExistente';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
//import unfetch from 'unfet    ch';

// * snip *
export default function CreatePOST(data) {
    const [open, setOpen] = "true";
  
                                const handleClose = () => {
                                  setOpen("false")
                                };
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
                                    <Dialog onClose={handleClose} open={true}>
                                <DialogTitle>
                                      Clase Creada
                                </DialogTitle>
                              </Dialog>
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
