import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../Components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../Components/Toolbar';
import SignIn from './../Components/SignIn';
import SignUp from './../Components/SignUp';
import Home from './../Components/Home';
import ReactDOM from 'react-dom';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            onClick= {e=> { 
              console.log("hola")
              ReactDOM.render(
                <React.StrictMode>
                    <Home/>
                  </React.StrictMode>,
              document.getElementById('root'))}
            }
          >
            {'mr Asistencias'}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              onClick= {e=> { 
                console.log("hola")
                ReactDOM.render(
                  <React.StrictMode>
                      <SignIn/>
                    </React.StrictMode>,
                document.getElementById('root'))}
              }
            >
              {'Iniciar Sesión'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              onClick= {e=> { 
                console.log("hola")
                ReactDOM.render(
                  <React.StrictMode>
                      <SignUp/>
                    </React.StrictMode>,
                document.getElementById('root'))}
              }
            >
              {'Crear Cuenta'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
