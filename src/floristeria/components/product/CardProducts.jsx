import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useCategoryStore, useProductStore, useUiStore } from '../../../hooks';

import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Box, InputBase } from '@mui/material'
import { DeleteForever, AutoFixHigh } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'


import { motion } from "framer-motion";
import { variantsCard } from '../../../animation/framerValues';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardProducts = () => {

  const { products } = useSelector(state => state.product)
  const { startLoadingCategory } = useCategoryStore();
  const { startLoadingProduct, startActiveUpdateProduct, startIdActiveProduct, startDeleteProduct, startDataImageUpload } = useProductStore();
  const { openDateModal } = useUiStore();

  const [expanded, setExpanded] = useState(false);
  const [inputSearch, setinputSearch] = useState("")


  const MotionCard = motion(Card);

  useEffect(() => {
    startLoadingProduct();
    startLoadingCategory();
  }, [])


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onUpdate = (product) => {
    startDataImageUpload({
      public_id: '',
      secure_url: '',
    })
    startActiveUpdateProduct();
    startIdActiveProduct(product);
    openDateModal();
  }



  const onDelete = (productId) => {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, bórralo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Borrado!',
          'Su archivo ha sido eliminado.',
          'success'
        )

        startDeleteProduct(productId);

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tú archivo está a salvo :)',
          'error'
        )
      }
    })
  }


  const handleSearch = (e) => {
    setinputSearch(e.target.value)
    console.log(inputSearch)
  }



  return (


    <>

      <br />
      <br />

      <InputBase
         sx={{ ml: 5, flex: 1,  }}
          placeholder="Buscador.."
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={handleSearch}
      />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>


      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} >

        {
          products.slice(0).reverse().map(product => (
            <MotionCard
              whileHover="hover"
              initial="hidden"
              animate="visible"
              variants={variantsCard}
              sx={{
                width: 230,
          
                mt: 3, ml: 3,
                borderWidth: 0.1,
                borderRadius: '25px',
              }} key={product.id}>
              <Typography textAlign="center" gutterBottom variant="h5" noWrap component="div" sx={{ maxWidth: 260, mt: 1 }} >
                <strong> {product.name} </strong>
              </Typography>

              <Typography textAlign="center" variant="body2" noWrap color="text.secondary" sx={{ maxWidth: 175, mt: 1, ml: 3.5 }}>
                {product.category?.name}
              </Typography>
              <CardMedia
                component="img"
                height="150px"
                sx={{ mt: 1.5 }}
                image={product.image?.secure_url ? product.image.secure_url : 'https://res.cloudinary.com/dwozn2lvh/image/upload/v1668917833/1_xks83e.webp'}
                alt="Paella dish"
              />
              <CardContent>

                <Typography sx={{ color: 'black' }} variant="body2" color="text.secondary">
                  Código: {product.code}
                </Typography>
                <Typography sx={{ color: 'black', mt: 1 }} variant="body2" color="text.secondary">
                  Precio: L {product.price}
                </Typography>
                <Typography sx={{ color: 'black', mt: 1 }} variant="body2" color="text.secondary">
                  Cantidad: {product.stock}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton onClick={() => onUpdate(product)} aria-label="add to favorites" size="small" sx={{ ml: 2, color: 'secondary.main' }}>
                  <AutoFixHigh />
                </IconButton>

                <IconButton onClick={() => onDelete(product.id)} aria-label="share" size="small" sx={{ ml: 1.5, color: 'secondary.main' }}>
                  <DeleteForever />
                </IconButton>

                <ExpandMore
                  // TransitionComponent={ExpandMoreIcon}
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph> Descripción:</Typography>
                  <Typography variant="h7" align='justify'>
                    {
                      product.description
                    }
                  </Typography>
                </CardContent>
              </Collapse>
            </MotionCard>
          ))
        }
      </Box>
    </>


  );
}
