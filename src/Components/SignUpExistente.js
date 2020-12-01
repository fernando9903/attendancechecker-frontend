import React from 'react';
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

import createPOST from './../API/createPOST';

import SignIn from './SignIn';

import ReactDOM from 'react-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        LA VERGA
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
    apellido: '',
    contraseña: '',
    correo: '',
    id: 0,
    nombre: '',
    usuario: ''
  }

  /*var callPOST = (event) => {
    console.log(JSON.stringify(usuario));
    createPOST(usuario);
  }*/

  var actualiza = (e, type) => {

    usuario[type] = e.target.value;

    console.log(JSON.stringify(usuario));
    if(type == 'registrar')
    {
      console.log("eee");
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
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrartessss
        </Typography>
        <form className={classes.form} Validate onSubmit = {e => actualiza(e, 'registrar')}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nombre"
                variant="outlined"
                required
                inputProps={{pattern: "[a-zA-Z]"}}
                onChange = {e => actualiza(e, 'nombre')}
                fullWidth
                id="nombre"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange = {e => actualiza(e, 'apellido')}
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange = {e => actualiza(e, 'usuario')}
                id="usuario"
                label="Nombre de Usuario"
                name="usuario"
                autoComplete="usuario"
              />
              </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange = {e => actualiza(e, 'correo')}
                id="correo"
                type="email"
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
            inputProps= {{pattern: ".{8,}" }}
                onChange = {e => actualiza(e, 'contraseña')}
                id="contraseña"
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
          <p>Datos ya existentes</p>
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

