import { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Box, Divider } from '@mui/material'
import { red } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { MoreVert, DeleteForever, AutoFixHigh } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCategoryStore, useProductStore, useUiStore } from '../../../hooks';
import { border } from '@mui/system';

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
// Subir al main

export const CardProducts = () => {

  const { products } = useSelector(state => state.product)
  const { startLoadingCategory } = useCategoryStore();
  const { startLoadingProduct, startActiveUpdateProduct, startIdActiveProduct, startDeleteProduct } = useProductStore();
  const { openDateModal } = useUiStore();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    startLoadingProduct();
    startLoadingCategory()
  }, [])

  //FUNCION MOSTRAR INICIALES NOMBRE



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onUpdate = (product) => {
    startActiveUpdateProduct();
    startIdActiveProduct(product);
    openDateModal();
  }

  const onDelete = (productId) => {
    startDeleteProduct(productId);
  }

  return (


    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} >

      {
        products.slice(0).reverse().map(product => (
          <Card
            sx={{
              width: 230,
              mt: 4, ml: 3,
              borderWidth: 0.1,
              borderRadius: '35px',
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
              image={product.image?.secure_url ? product.image.secure_url : 'http://localhost:3000/src/assets/1.jpg'}
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
                <Typography variant="body2" noWrap sx={{ maxWidth: 300 }} paragraph>
                  {
                    product.description
                  }
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))
      }
    </Box>





  );
}
