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
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

function Index() {
  
  
  return (
    <React.Fragment>
      <AppAppBar />
      <img style={{ display: 'none' }} src={"./../IAsistel-Web-r.jpg"} alt="increase priority" />
    </React.Fragment>
  );
}

export default withRoot(Index);
