import { useState, useEffect } from "react";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  Button, Grid, Link, Typography, IconButton, Input, FormControl, InputLabel, FilledInput, InputAdornment,
} from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import Swal from "sweetalert2";

import {
  LoginOutlined, Visibility, VisibilityOff, Email, Home,
} from "@mui/icons-material";

import { useAuthStore, useForm } from "../../hooks";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

export const LoginPage = () => {
  const { startLogin, errorMessage } = useAuthStore();

  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);

  const navigate = useNavigate();

  const toInitio = () => {
    navigate("/");
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autentificacion", errorMessage, "error");
    }
  }, [errorMessage]);

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
    <AuthLayout title="LOGIN">
      <form onSubmit={loginSubmit}>
        <Grid container>
          <Grid item xs={11.5} sx={{ mt: 3 }}>
            <FormControl sx={{ m: 2, width: "95%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Correo
              </InputLabel>
              <FilledInput
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                name="loginEmail"
                value={loginEmail}
                onChange={onInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <Email />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={11.5} sx={{ mt: 3 }}>
            <FormControl sx={{ m: 2, width: "95%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                label="Password"
                type={values.showPassword ? "text" : "password"}
                value={loginPassword}
                onChange={onInputChange}
                name="loginPassword"
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
          </Grid>

          {/* background: 'linear-gradient(160deg, #C22557 35%, #ED5887 59%, #FFF 130%)' */}
          <Grid
            container
            spacing={4}
            sx={{ mb: 6, mt: 3 }}
            justifyContent="center"
          >
            <Grid item xs={11.5} sm={11.5}>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, mb: 1, background: 'linear-gradient(100deg, #C22557 35%, #ED5887 59%, #FFF 140%)' }}
                type="submit"
              >
                <LoginOutlined />
                <Typography sx={{ ml: 1 }}> Login </Typography>
              </Button>
            </Grid>

            <Grid item xs={11.5} sm={11.5}>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 1, mb: 0, background: 'linear-gradient(100deg, #C22557 35%, #ED5887 59%, #FFF 140%)' }}
                // type="submit"
                onClick={toInitio}

              >
                <Home />
                <Typography sx={{ ml: 1 }}> Volver a Inicio </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" sx={{ m: 2 }}>



            {/* <Link
              sx={{ ml:19 }}
              component={RouterLink}
              color="primary"
              to="/auth/register"
            >
              Crear una cuenta
            </Link> */}


          </Grid>
          
        </Grid>
      </form>
    </AuthLayout>
  );
};
