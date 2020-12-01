
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
import createPOST from './../API/createPOST';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React, { useState, useEffect } from "react";

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

  const [state2, setState2] = React.useState({
    L: true,
    Ma: false,
    Mi: false,
    Ju: false,
    Vi: false,
    S: false,
    D: false,
  });

  const { L, Ma, Mi, Ju, Vi, S, D } = state2;

  var usuario = {
    name: "",
      last_name: "",
      hora_inicio: "",
      hora_fin: "",
      modalidad: "",
      periodo: "",
      dias: "",
  }

  const [state, setState] = useState({
    select: {
      
      name: "",
      last_name: "",
      hora_inicio: "",
      hora_fin: "",
      modalidad: "",
      periodo: "",
      dias: "",
    }
  });

  const handleChangeCheck = (event) => {
    setState2({ ...state2, [event.target.name]: event.target.checked });
    actualiza(event, 'dias')
  };

  const [json, setJson] = useState([]);

  useEffect(() => {
    //var valor= createLogIn(state);
     
   
   }, [state]);
  

   const handleChange = e => {
    e.preventDefault();
    setState({
      select: {
        name: e.target.name.value,
      last_name: e.target.name.value,
      hora_inicio: e.target.last_name.value,
      hora_fin: e.target.hora_fin.value,
      modalidad: e.target.modalidad.value,
      periodo: e.target.periodo.value,
      dias: e.target.dias.value,
      }


    });
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

const [modalidad, setModalidad] = React.useState('');

const handleChangeModalidad = (event) => {
  setModalidad(event.target.value);
  actualiza(event, 'modalidad')
};

const [periodo, setPeriodo] = React.useState('');

const handleChangePeriodo = (event) => {
  setPeriodo(event.target.value);actualiza(event, 'periodo')
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
                name="nombre"
                required
                variant="outlined"onInput= { (e) => {
                  e.target.value = e.target.value.slice(0,40 )
                }}
                fullWidth
                onChange = {e => actualiza(e, 'name')}
                id="name"
                label="Nombre Clase"
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
                onChange = {e => actualiza(e, 'hora_inicio')}
                fullWidth
                id="hora_inicio"
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
                onChange = {e => actualiza(e, 'hora_fin')}
                fullWidth
                id="hora_fin"
                label="Hora de Fin"
                defaultValue="08:30"
                autoFocus
              />
            </Grid>
              <Grid item xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel  component="legend">Días</FormLabel>
        <FormGroup row>
          <FormControlLabel id="dias"
            control={<Checkbox checked={L} onChange={handleChangeCheck} name="L" />}
            label="Lunes"
          />
          <FormControlLabel id="dias"
            control={<Checkbox checked={Ma} onChange={handleChangeCheck} name="Ma" />}
            label="Martes"
          />
          <FormControlLabel id="dias"
            control={<Checkbox checked={Mi} onChange={handleChangeCheck} name="Mi" />}
            label="Miercoles"
          />
          <FormControlLabel id="dias"
            control={<Checkbox checked={Ju} onChange={handleChangeCheck} name="Ju" />}
            label="Jueves"
          />
          <FormControlLabel id="dias"
            control={<Checkbox checked={Vi} onChange={handleChangeCheck} name="Vi" />}
            label="Viernes"
          />
          <FormControlLabel
            control={<Checkbox checked={S} onChange={handleChangeCheck} name="S" />}
            label="Sabado"
          />
          <FormControlLabel
            control={<Checkbox checked={D} onChange={handleChangeCheck} name="D" />}
            label="Domingo"
          />
        </FormGroup>
      </FormControl>
              </Grid>
            <Grid  item xs={12}>
            <InputLabel id="periodo">Periodo</InputLabel>
        <Select
          labelId="periodo"
          id="periodo"
          value={periodo}
          onChange={handleChangePeriodo}
        >
          <MenuItem value={"Enero-Mayo"} >Enero-Mayo</MenuItem>
          <MenuItem value={"Agosto-Diciembre"}>Agosto-Diciembre</MenuItem>
        </Select>
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="modalidad">Modalidad</InputLabel>
        <Select
                onChange = {e => actualiza(e, 'modalidad')}
          labelId="modalidad"
          id="modalidad"
          value={modalidad}
          onChange={handleChangeModalidad}
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

