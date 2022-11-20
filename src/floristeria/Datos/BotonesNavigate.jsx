import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';




const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 85,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 80,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
  onClick: () => {
    console.log('click')
  }

}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export const BotonesNavigate = () => {


  const navigate = useNavigate();

  const toCategory = () => {
      navigate('/category')
  }

  const toProduct = () => {
      navigate('/product')
  }

  const toCustomer = () => {  
    navigate('/customer')
  }

  const toInvoice = () => {
    navigate('/invoice')
  }


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', mt: 3, ml:1 }}   gap={1} >

        <ImageButton focusRipple style={{ width: '24%' }} onClick={toCategory} >
            <ImageSrc style={{ backgroundImage: 'url(http://localhost:3000/src/assets/2.jpg)'  }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                    position: 'relative',
                    p: (theme) => theme.spacing(1),
                    // pt: (theme) => theme.spacing(2),
                }}
                >
                Categorias
                <ImageMarked className="MuiImageMarked-root" />
                </Typography>
            </Image>
        </ImageButton>

        <ImageButton focusRipple style={{ width: '24%' }} onClick={toProduct} >
            <ImageSrc style={{ backgroundImage: 'url(http://localhost:3000/src/assets/3.jpg)'  }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                    position: 'relative',
                    p: (theme) => theme.spacing(1),
                    // pt: (theme) => theme.spacing(2),
                }}
                >
                Productos
                <ImageMarked className="MuiImageMarked-root" />
                </Typography>
            </Image>
        </ImageButton>

        <ImageButton focusRipple style={{ width: '24%' }} onClick={toCustomer} >
            <ImageSrc style={{ backgroundImage: 'url(http://localhost:3000/src/assets/6.jpg)'  }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                    position: 'relative',
                    p: (theme) => theme.spacing(1),
                    // pt: (theme) => theme.spacing(2),
                }}
                >
                Clientes
                <ImageMarked className="MuiImageMarked-root" />
                </Typography>
            </Image>
        </ImageButton>


        <ImageButton focusRipple style={{ width: '24%' }} onClick={ toInvoice } >
            <ImageSrc style={{ backgroundImage: 'url(http://localhost:3000/src/assets/5.jpg)'  }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                    position: 'relative',
                    p: (theme) => theme.spacing(1),
                    // pt: (theme) => theme.spacing(2),
                }}
                >
                Ventas
                <ImageMarked className="MuiImageMarked-root" />
                </Typography>
            </Image>
        </ImageButton>

    </Box>
  );
}


