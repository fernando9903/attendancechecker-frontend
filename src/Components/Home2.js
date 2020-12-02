/*import withRoot from './../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './../modules/ProductCategories';
import ProductSmokingHero from './../modules/ProductSmokingHero';
import AppFooter from './../modules/AppFooter';
import ProductHero from './../modules/ProductHero';
import ProductValues from './../modules/ProductValues';
import ProductHowItWorks from './../modules/ProductHowItWorks';
import ProductCTA from './../modules/ProductCTA';
import AppAppBar from './../modules/AppAppBar';


const  state = { 
  
  // Initially, no file is selected 
  selectedFile: null
}; 
 
// On file select (from the pop up) 
const onFileChange = event => { 
 
  // Update the state 
  //setState({ selectedFile: event.target.files[0] }); 
  state.selectedFile =  event
 
}; 
 
// On file upload (click the upload button) 
 const onFileUpload = () => { 
 
  // Create an object of formData 
   const formData = new FormData(); 
 
  // Update the formData object 
  formData.append( 
    "myFile", 
    state.selectedFil
  ); 
 
  // Details of the uploaded file 
  console.log(state.selectedFile); 
  }

  

function Index() {
  
  

  return (
    <React.Fragment>
      <AppAppBar />
            <div> 
                <input type="file" onChange={onFileChange()} /> 
                <button onClick={onFileUpload()}> 
                  Upload! 
                </button> 
            </div> 
    </React.Fragment>
  );
}

export default withRoot(Index);
*/

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';
import AppAppBar from './../modules/AppAppBar';
import AppFooter from './../modules/AppFooter';

function Home2() {

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  // process CSV data
  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[2].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    
    const list = [];
    for (let i = 3; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }
    
    // prepare columns list from headers
    const columns = headers.map(c => ({
      name: c,
      selector: c,
    }));

    setData(list);
    setColumns(columns);
  }

  // handle file upload
  const handleFileUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  }

  return (
    <div>
      <AppAppBar />
      <h3>Agregar archivo de asistencia</h3>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
      />
      <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default Home2;
