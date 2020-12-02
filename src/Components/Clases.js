
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
import createPOST from './../API/createClase';
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
    
      L: false,
    Ma: false,
    Mi: false,
    Ju: false,
    Vi: false,
    S: false,
    D: false,
    }
  );

  const { L, Ma, Mi, Ju, Vi, S, D } = state2;
  const error = [L, Ma, Mi, Ju, Vi, S, D].filter((v) => v).length < 1;

  var usuario = {
    name: "",
      hora_inicio: "",
      hora_fin: "",
      modalidad: "",
      periodo: "",
      dias: "",
  }

  const [state, setState] = useState({
    select: {
      
      name: "",
      hora_inicio: "",
      hora_fin: "",
      modalidad: "",
      periodo: "",
      dias: "",
    }
  });

  const handleChangeCheck = (event) => {
    setState2({ ...state2, [event.target.name]: event.target.checked });
  };

  const [json, setJson] = useState([]);

  useEffect(() => {
    var valor= createPOST(state);
     
   
   }, [state]);
  

   const handleChange = e => {
    console.log("entra")
    var x=""
    if(e.target.hora_fin.value<e.target.hora_inicio.value)
    {
      return  
    }
    if(state2.L)
    {
      x=x+"L"
    }
    if(state2.Ma)
    {
      x=x+"Ma"
    }
    if(state2.Mi)
    {
      x=x+"Mi"
    }
    if(state2.Ju)
    {
      x=x+"Ju"
    }
    if(state2.Vi)
    {
      x=x+"Vi"
    }
    if(state2.S)
    {
      x=x+"S"
    }
    if(state2.D)
    {
      x=x+"D"
    }

     console.log("no llega")
    e.preventDefault();
    setState({
      select: {
        name: e.target.name.value,
      hora_inicio: e.target.hora_inicio.value,
      hora_fin: e.target.hora_fin.value,
      modalidad: modalidad,
      periodo: periodo,
      dias: x,
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
    if(type == 'periodo')
    {
      setPeriodo(e.target.value)
    }
    if(type == 'modalidad')
    {
      setModalidad(e.target.value)
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
};

const [periodo, setPeriodo] = React.useState('');

const handleChangePeriodo = (e) => {
  setPeriodo(e.target.value);
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
        <form className={classes.form} Validate onSubmit = {e => handleChange(e)}>
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
                helperText="No introducir hora anterior a la de inicio"
                id="hora_fin"
                label="Hora de Fin"
                defaultValue="08:30"
                autoFocus
              />
            </Grid>
              <Grid item xs={12}>
              <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel  component="legend">Días</FormLabel>
        <FormGroup onChange={e => actualiza(e,"dias")} row>
          <FormControlLabel id="dias"
            control={<Checkbox checked={L} onChange={handleChangeCheck}  name="L" value='L'/> }
            label="Lunes"
          />
          <FormControlLabel id="dias"
            control={<Checkbox checked={Ma} onChange={handleChangeCheck} name="Ma" value='Ma'/>}
            label="Martes"
          />
          <FormControlLabel id="dias"
            control={<Checkbox checked={Mi} onChange={handleChangeCheck} name="Mi" value='Mi'/>}
            label="Miercoles"
          />
          <FormControlLabel id="dias"
            control={<Checkbox checked={Ju} onChange={handleChangeCheck} name="Ju" value='Ju'/>}
            label="Jueves"
          />
          <FormControlLabel id="dias"
            control={<Checkbox checked={Vi} onChange={handleChangeCheck} name="Vi" value='Vi'/>}
            label="Viernes"
          />
          <FormControlLabel
            control={<Checkbox checked={S} onChange={handleChangeCheck} name="S" value='S'/>}
            label="Sabado"
          />
          <FormControlLabel
            control={<Checkbox checked={D} onChange={handleChangeCheck} name="D" value='S'/>}
            label="Domingo"
          />
        </FormGroup>
        <FormHelperText>Elegir al menos 1</FormHelperText>
      </FormControl>
              </Grid>
            <Grid  item xs={12}>
            <InputLabel >Periodo</InputLabel>
        <Select
          labelId="periodo"
          id="periodo"
          value={periodo}
          onChange={e => actualiza(e, 'periodo')} required='true'
        >
          <MenuItem  value={"Enero-Mayo"} >Enero-Mayo</MenuItem>
          <MenuItem value={"Agosto-Diciembre"}>Agosto-Diciembre</MenuItem>
        </Select>
            </Grid>
            <Grid item xs={12}>
            <InputLabel >Modalidad</InputLabel>
        <Select
                //onChange = {e => actualiza(e, 'modalidad')}
          labelId="modalidad"
          id="modalidad"
          value={modalidad}
          onChange={e=> actualiza(e, 'modalidad')}
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

