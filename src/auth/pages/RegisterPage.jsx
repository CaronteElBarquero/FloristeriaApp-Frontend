import { useEffect, useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Button, FilledInput, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

import Swal from 'sweetalert2';


import { Email, Portrait, Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuthStore, useForm } from '../../hooks';



const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: ''

};



export const RegisterPage = () => {


  const { errorMessage, startRegister } = useAuthStore();


  const { 
    registerName, registerEmail, registerPassword, onInputChange,

  } = useForm( registerFormFields );


  const registerSubmit = ( event ) => {
    event.preventDefault();
    startRegister({ name: registerName, email: registerEmail, password: registerPassword});
  }

  useEffect(() => {

    if ( errorMessage !== undefined ) {
      Swal.fire('Error en la autentificacion', errorMessage, 'error');

    }

  }, [errorMessage])



  // FUNCION MOSTRAR PASSWORD
  const [values, setValues] = useState({

    showPassword: false,
  });


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // TERMINA FUNCION MOSTRAR PASSWORD



  return (
    <AuthLayout title="REGISTRO">
      <form onSubmit={ registerSubmit } >
          <Grid container>
           

            <FormControl sx={{ m: 2, width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Nombre completo</InputLabel>
                    <FilledInput
                      label="Nombre completo"
                      type="text"
                      placeholder='Nombre completo'
                      name="registerName" 
                      value={ registerName }
                      onChange={ onInputChange }
                      endAdornment={
                        <InputAdornment position="end">
                          <Portrait />
                        </InputAdornment>
                      }
                  />
            </FormControl>

            <FormControl sx={{ m: 2, width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Correo</InputLabel>
                    <FilledInput
                      label="Correo"
                      type="email"
                      placeholder='@gmail.com'
                      name="registerEmail" 
                      value={ registerEmail }
                      onChange={ onInputChange } 
                      endAdornment={
                        <InputAdornment position="end">
                          <Email />
                        </InputAdornment>
                      }
                  />
            </FormControl>



            <FormControl sx={{ m: 2, width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <FilledInput
                      label="Password"
                      type={values.showPassword ? 'text' : 'password'}
                      name="registerPassword" 
                      value={ registerPassword }
                      onChange={ onInputChange }

                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
              </FormControl>


            
            <Grid container spacing={ 4 } sx={{ mb: 6, mt: 1 }} justifyContent="center">
              <Grid item xs={ 11.5 } sm={ 11.5 } >
                <Button variant='contained' fullWidth sx={{ mt: 2, mb: 1, background: 'linear-gradient(100deg, #C22557 35%, #ED5887 59%, #FFF 140%)' }} type='submit'>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end' sx={{ m:2 }} >
              <Typography sx={{ mr: 5 }}> <strong> ¿Ya tienes cuenta?</strong></Typography>
              <Link component={ RouterLink } color='primary.main' to="/auth/login">
                Ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}