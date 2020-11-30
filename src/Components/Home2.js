import withRoot from './../modules/withRoot';
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
  this.setState({ selectedFile: event.target.files[0] }); 
 
}; 
 
// On file upload (click the upload button) 
 const onFileUpload = () => { 
 
  // Create an object of formData 
   const formData = new FormData(); 
 
  // Update the formData object 
  formData.append( 
    "myFile", 
    this.state.selectedFile, 
    this.state.selectedFile.name 
  ); 
 
  // Details of the uploaded file 
  console.log(this.state.selectedFile); 
  }

  

function Index() {
  
  

  return (
    <React.Fragment>
      <AppAppBar />
      <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
    </React.Fragment>
  );
}

export default withRoot(Index);
