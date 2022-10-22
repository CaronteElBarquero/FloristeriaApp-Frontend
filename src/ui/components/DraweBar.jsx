import { useState } from "react";
import { useAuthStore } from "../../hooks";
import { drawerFunction } from "../../floristeria/helpers";

import { styled, useTheme } from "@mui/material/styles";
import {
  Box, Button, Grid, Divider, IconButton, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Typography, Toolbar, MenuItem,
} from "@mui/material";

import {
  Inbox, Mail, Menu, ChevronLeft, ChevronRight, Storefront,
} from "@mui/icons-material";

import { ProductPage } from "../../floristeria/pages";
import { SpeelProduct, InitionImages, ButtonList, ShowLogout } from "../../floristeria/components";


// Helper de las funciones del componente DraweBar
const { drawerWidth, openedMixin, closedMixin, DrawerHeader, AppBar, Drawer } = drawerFunction();


export const DraweBar = ( { children } ) => {
  
  const { status, startLogout } = useAuthStore();
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (

    <Box sx={{ display: "flex" }}>

      <AppBar position="fixed" open={open}
        sx={{
          background: "linear-gradient(120deg, #FE6B8B 70%, #FF8E53 100%)",
          color: "#ffff",
        }}
      >
        <Toolbar>
          {status === "authenticated" && (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <Menu />
              </IconButton>

              <Grid className="btn-creation" size="large" variant="text"
                sx={{
                  position: "absolute",
                  mr: 3,
                  right: 0,
                  color: "#fff",
                }}
              >
                <ShowLogout />
              </Grid>
            </>
          )}
          <Typography variant="h6" noWrap component="div">
            Floristeria NolyGifts
          </Typography>
        </Toolbar>
      </AppBar>

      {status === "authenticated" && (
        <>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <Storefront sx={{ width: "80px", mr: 0.5, color: 'primary.main' }} />
              <Typography variant="h7" sx={{ mr: 2 }} ><strong>NolyGifts</strong></Typography>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <Divider />
            <Divider />

            {/* COMPONENTE BUTTONLIST EN DONDE SE NOS MUESTRAN TODOS LOS BOTONES QUE NOS AYUDAN A NAVEGAR EN LA APLICACION */}
            <ButtonList />

            <Divider />
          </Drawer>
        </>
        
      )}

      <Box component="main" 
        
        sx={{ flexGrow: 1, p: 3, mt: 8, backgroundColor: '#eff3f8', height: `100vh-240px` }}
      >
        {/* EN ESTE APARTADO SE PONDRAN LOS HIJOS DEL DRAWEBAR ESTO APLICA A LOS PRODUCTS, CATEGORIAS, CLIENTES Y DEMAS HIJOS QUE EXISTAN */}
        { children }  
      </Box>
    </Box>

  );
};
