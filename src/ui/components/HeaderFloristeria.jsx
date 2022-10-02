import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppBar, Box, Toolbar, Button, IconButton, Link } from "@mui/material";
import { Menu, Home } from "@mui/icons-material";
import { useAuthStore } from "../../hooks";

// import './style.css'



// const drawerWidth = 240;


export const HeaderFloristeria = ({ children }) => {


  const {  checkAuthToken, status, startLogout } = useAuthStore();


  useEffect(() => {
    checkAuthToken();
  }, [])


  const navigate = useNavigate();

  const onInitial = () => {
    navigate("inicio");
  };

  const onContact = () => {
    navigate("contacto");
  };
  
  const onAccess = () => {
    navigate("/auth/login");
  };
  
  
  
  return (
    

    <Box sx={{ flexGrow: 1 }} borderRadius="50%">
      <AppBar
        position="fixed"
        sx={{ 
          backgroundColor: "#f5dbd8", 
          color: "#5e0324",
        }}
        >
        <Toolbar>
          { children }

          {/* {  status === "authenticated" && (
            
            <IconButton
            size="large"
            edge="start"
            color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <Menu />
            </IconButton>
          )} */}

          <Button
            size="large"
            variant="text"
            onClick={onInitial}
            sx={{ color: "#5e0324" }}
            className="btn-creation"
            >
            Inicio
          </Button>

          {/* <Button
            size="large"
            variant="text"
            sx={{ ml: 3, color: "#5e0324" }}
            onClick={onContact}
            className="btn-creation"
          >
            Contacto
          </Button> */}

          {/* Si esta autenticado el boton inicio saldra */}
          { status === "authenticated" && (
            <>
              <Button
                className="btn-creation"
                size="large"
                variant="text"
                onClick={ startLogout }
                sx={{
                  position: "absolute",
                  mr: 3,
                  right: 0,
                  color: "#5e0324",
                }}
              >
                Salir
              </Button>
            </>
          )}


          {/* Si no estoy autenticado saldra acceso */}
          { status === "not-authenticated" && (
            <>
              <Button
                className="btn-creation"
                size="large"
                variant="text"
                onClick={onAccess}
                sx={{
                  position: "absolute",
                  mr: 3,
                  right: 0,
                  color: "#5e0324",
                }}
              >
                Acceso
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
