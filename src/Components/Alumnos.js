
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

import React, { useState, useEffect } from "react";
import createPOST from './../API/createAlumn';

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
    id: "",
      name: "",
      last_name: "",
  }

  var menuItems =  []

  const clases = fetch (`http://localhost:3000/clase/`)
  .then(res => res.text()).then(pokemon => {
    console.log("Estas son las clases")
    console.log(cursos)
    console.log(JSON.parse(pokemon).clases[0]._id)

    for (const property in JSON.parse(pokemon).clases) {
      console.log(JSON.parse(pokemon).clases[property].name)
      menuItems.push(<MenuItem value={JSON.parse(pokemon).clases[property]._id}>
        {JSON.parse(pokemon).clases[property].name}</MenuItem>)
    }
  } )

  const [state, setState] = useState({
    select: {
      
      id: "",
      name: "",
      last_name: "",
      _id: "",
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
        id: e.target.id.value,
        name: e.target.name.value,
        last_name: e.target.last_name.value,
        _id: cursos,
      }


    });
  }

  /*var callPOST = (event) => {
    console.log(JSON.stringify(usuario));
    createPOST(usuario);
  }*/

  const [cursos, setCurso] = React.useState('');

const handleChanges = (event) => {
  console.log("Estos son los handleschangess")
  setCurso(event.target.value);
  console.log(cursos)
};

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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrar Alumnos
        </Typography>
        <form className={classes.form} Validate onSubmit = {e => handleChange(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="ID"
                name="id"
                id="id"
                required
                type="number"
                variant="outlined"helperText="No introducir id existente"
                onChange = {e => actualiza(e, 'id')}
                fullWidth
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)
              }}
                id="ID"
                label="ID Alumno"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange = {e => actualiza(e, 'name')}
                id="name"
                label="Nombre(s)"
                onInput= { (e) => {
                  e.target.value = e.target.value.slice(0,40)
                }}
                name="nombres"
                autoComplete="nombres"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange = {e => actualiza(e, 'last_name')}
                id="last_name"
                label="Apellido(s)"
                onInput= { (e) => {
                  e.target.value = e.target.value.slice(0,40)
                }}
                name="nombres"
                autoComplete="apellidos"
              />
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="Cursos">Curso</InputLabel>
        <Select
          labelId="cursos"
          id="cursos"
          value={cursos}
          required
          onChange={handleChanges}
        >
          {
            //Select.push(<MenuItem value={"Metodos Agiles"}>Metodos Agiles</MenuItem>)
            //MenuItem.push(<MenuItem value={"Metodos Agiles"}>Metodos Agiles</MenuItem>)
          
            menuItems
            /*<MenuItem value={"Metodos Agiles"}>Metodos Agiles</MenuItem>
          <MenuItem value={"Ingles B-II"}>Ingles B-II</MenuItem>*/
          }
          
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

