import { useState } from "react";
import { useAuthStore } from "../../hooks";

import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip } from '@mui/material';
import {  PersonAdd, Settings, Logout  } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";


export const ShowLogout = () => {

  const { startLogout, user } = useAuthStore();

  const navigate = useNavigate()

  //FUNCION QUE ME RETORNE LAS INICIALES EN EL NOMBRE DEL USUARIO, PARA AGREGAR EN EL BOTON DE SALIDA
  const initial = () => {

    var name = user.name;
    var firstInitial = name.slice(0,1);
    var secondPosition = name.indexOf(" ") + 1;
    var secondInitial = name.slice(secondPosition, secondPosition + 1);
     
    if ( secondPosition === 0 ) return firstInitial.toUpperCase();

    name = firstInitial + secondInitial;
    return name.toUpperCase();
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onRegister = () => {
    navigate('/register');
  }


  return (

    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="configuraciones">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{initial()}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar sx={{ backgroundColor: 'primary.main' }} /> {user.name}
        </MenuItem>

        <Divider />

        <MenuItem onClick={ onRegister }>
          <ListItemIcon>
            <PersonAdd sx={{ color: 'secondary.main' }} fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> 
{/* 
        <MenuItem>
          <ListItemIcon>
            <Settings sx={{ color: 'secondary.main' }} fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}

        <MenuItem onClick={startLogout}>
          <ListItemIcon>
            <Logout sx={{ color: 'primary.main' }} fontSize="small" />
          </ListItemIcon>
          Cerrar Sesión
        </MenuItem>
      </Menu>
    </>
    
  );
};
