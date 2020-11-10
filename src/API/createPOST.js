// /src/actions/blogPostActions.js

import { SmsOutlined } from '@material-ui/icons';
import fetch from 'isomorphic-fetch';
//import unfetch from 'unfetch';

// * snip *
export function createPOST(data) {
    //const f= unfetch.bind()
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080/Profesores2/prof');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST', 'OPTIONS');
    process.stdout.write("hello: ");
    return fetch('http://localhost:8080/Profesores2/prof', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    }).then(res => {
        return res.json;
    }).catch(err =>
    {
        print("s");
        console.log(err);
        console.log(JSON.stringify(data))
    });
}
