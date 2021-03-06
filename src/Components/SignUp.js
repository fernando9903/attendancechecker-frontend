
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { useState, useEffect } from "react";
import AppAppBar from './../modules/AppAppBar';

import createPOST from './../API/createPOST';

import SignIn from './SignIn';

import ReactDOM from 'react-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  var usuario = {
    name: '',
    last_name: '',
    email: '',
    password: '',
  }

  const [state, setState] = useState({
    select: {
      name: '',
      last_name: '',
      email: '',
      password: '',
    }
  });

  const [json, setJson] = useState([]);

  useEffect(() => {
    var valor= createPOST(state);
     
   
   }, [state]);
  

   const handleChange = e => {
    e.preventDefault();
    setState({
      select: {
        name: e.target.name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }


    });
  }


  /*var callPOST = (event) => {
    console.log(JSON.stringify(usuario));
    createPOST(usuario);
  }*/

  var actualiza = (e, type) => {

    usuario[type] = e.target.value;

    console.log(JSON.stringify(state));
    if(type == 'registrar')
    {
      createPOST(usuario);
    }
  
  }

  const changeToSignIn = () => {
    ReactDOM.render(
      <React.StrictMode>
        <SignIn/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <React.Fragment><AppAppBar/></React.Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarte
        </Typography>
        <form className={classes.form} Validate onSubmit = {e => handleChange(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nombre"
                required
                type="text"
                variant="outlined"
                onChange = {e => actualiza(e, 'name')}
                fullWidth
                id="name"
                label="Nombre"onInput= { (e) => {
                  e.target.value = e.target.value.slice(0,40 )
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange = {e => actualiza(e, 'last_name')}
                id="last_name"
                label="Apellido"
                name="last_name"onInput= { (e) => {
                  e.target.value = e.target.value.slice(0,40 )
                }}
                autoComplete="lname"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange = {e => actualiza(e, 'email')}
                id="email"
                type="email"onInput= { (e) => {
                  e.target.value = e.target.value.slice(0,40)
                }}
                label="Correo"
                name="correo"
                autoComplete="correo"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="contraseña"
                label="contraseña"
                type="password"
                helperText="Deben ser 8 caracteres"
                onInput= { (e) => {
                  e.target.value = e.target.value.slice(0,25)
                }}
              inputProps= {{pattern: ".{8,}" }}
                onChange = {e => actualiza(e, 'password')}
                id="password"
                autoComplete="current-contraseña"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarte
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" onClick = {() => {changeToSignIn()}}>
                ¿Ya tienes una cuenta? Inicia sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

