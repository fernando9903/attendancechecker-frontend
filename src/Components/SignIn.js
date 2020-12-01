
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
import createLogIn from './../API/createLogIn';
import React, { useState, useEffect } from "react";
import SignUp from './SignUp';

import ReactDOM from 'react-dom';

 const Copyright= () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [state, setState] = useState({
    select: {
      apellido: 'null',
    contraseña: 'null',
    correo: 'null',
    id: 0,
    nombre: 'null',
    usuario: 'null'
    }
  });

  

  const [json, setJson] = useState([]);

  useEffect(() => {
    var valor= createLogIn(state);
     
   
   }, [state]);
  

   const handleChange = e => {
    e.preventDefault();
    setState({
      select: {
        apellido: 'null',
      contraseña: e.target.password.value,
      correo: e.target.email.value,
      id: 0,
      nombre: 'null',
      usuario: e.target.email.value
      }


    });
  }

  const changeToSignUp = (e) => {
    ReactDOM.render(
      <React.StrictMode>
        <SignUp/>
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
          Iniciar sesión
        </Typography>
        <form className={classes.form} Validate onSubmit = {e => handleChange(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"onInput= { (e) => {
              e.target.value = e.target.value.slice(0,30 )
            }}
            type="email"
            label="Correo o nombre de usuario"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            label="Contraseña"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Iniciar sesión
          </Button>
          <Grid container>
            
            <Grid item>
              <Link variant="body2" onClick = { () => {changeToSignUp()}}>
                {"¿No tienes una cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    
  );
}

