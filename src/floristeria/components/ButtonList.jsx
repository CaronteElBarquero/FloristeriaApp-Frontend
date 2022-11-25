import { useState } from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ContentPaste, Home, ProductionQuantityLimits, Wysiwyg, AssignmentInd  } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";



export const ButtonList = () => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


    const toHome = () => {
        navigate("/home");
        // console.log('hola')

    };


    const toCategory = () => {
        navigate("/home/category");
        // console.log('hola')

    }; 

    const toProduct = () => {
        navigate("/home/product");
        // console.log('hola')

    }; 


    const toCustomer = () => {
        navigate("/home/customer");
        // console.log('hola')
        
    };


    const toInvoice = () => {
        navigate("/home/invoice");
        // console.log('hola')
        
    };



  return (

    <>
        <List sx={{ mt: 1 }} >
            
        <ListItem disablePadding  sx={{ display: 'block' }} onClick={ toHome }   >
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 6,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <Home sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="DashBoard" sx={{ opacity: open ? 0 : 1, ml:4, color: '#808080' }}  />
                </ListItemButton>
            </ListItem>



            <ListItem disablePadding  sx={{ display: 'block' }} onClick={ toCategory }   >
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 6,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <Wysiwyg sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="Categoria" sx={{ opacity: open ? 0 : 1, ml:4, color: '#808080' }}  />
                </ListItemButton>
            </ListItem>



            <ListItem disablePadding  sx={{ display: 'block' }} onClick={ toProduct }  >
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 6,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <ProductionQuantityLimits sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="Producto" sx={{ opacity: open ? 0 : 1, ml:4, color: '#808080' }}  />
                </ListItemButton>
            </ListItem>


            <ListItem disablePadding  sx={{ display: 'block' }} onClick={ toCustomer }  >
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 6,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <AssignmentInd sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="Clientes" sx={{ opacity: open ? 0 : 1, ml:4, color: '#808080' }}  />
                </ListItemButton>
            </ListItem>


            <ListItem disablePadding  sx={{ display: 'block' }} onClick={ toInvoice }  >
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 6,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <ContentPaste sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="Facturas" sx={{ opacity: open ? 0 : 1, ml:4, color: '#808080' }}  />
                </ListItemButton>
            </ListItem>


        </List>
    
    </>

    
  )
}
