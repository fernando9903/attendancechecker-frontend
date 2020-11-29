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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {createPOST} from './../API/createPOST';

import SignIn from './SignIn';

import ReactDOM from 'react-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        ITSON
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
      console.log(createPOST(usuario));
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

const [age, setAge] = React.useState('');

const handleChange = (event) => {
  setAge(event.target.value);
};


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrar Clase
        </Typography>
        <form className={classes.form} Validate onSubmit = {e => actualiza(e, 'registrar')}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="ID"
                name="ID"
                required
                type="number"
                variant="outlined"
                fullWidth
                id="ID"
                label="ID de Clase"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="HoraIn"
                name="HoraIn"
                required
                type="time"
                variant="outlined"
                onChange = {e => actualiza(e, 'nombre')}
                fullWidth
                id="HoraIn"
                label="Hora de Inicio"
                defaultValue="07:30"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                autoComplete="HoraFin"
                name="HoraFin"
                required
                type="time"
                variant="outlined"
                onChange = {e => actualiza(e, 'nombre')}
                fullWidth
                id="HoraFin"
                label="Hora de Fin"
                defaultValue="08:30"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange = {e => actualiza(e, 'usuario')}
                id="nomCurso"
                label="Nombre del Curso"
                name="nomCurso"
                autoComplete="nomCurso"
              />
              </Grid>
            <Grid  item xs={12}>
            <InputLabel id="modalidad">Modalidad</InputLabel>
        <Select
          labelId="modalidad"
          id="modalidad"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"Presencial"}>Presencial</MenuItem>
          <MenuItem value={"Virtual"}>Virtual</MenuItem>
        </Select>
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

