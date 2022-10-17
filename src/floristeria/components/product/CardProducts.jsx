import { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import { Avatar, Card, CardHeader, CardMedia, CardContent,CardActions, Collapse, IconButton,Typography, Box } from '@mui/material'
import { red } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { MoreVert, DeleteForever, AutoFixHigh } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCategoryStore, useProductStore, useUiStore } from '../../../hooks';

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

  const {products  } = useSelector(state => state.product)
  const {startLoadingCategory} = useCategoryStore();
  const {  startLoadingProduct, startActiveUpdateProduct, startIdActiveProduct } = useProductStore();
  const { openDateModal } = useUiStore();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    startLoadingProduct();
    startLoadingCategory()
  }, [])
  


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onUpdate = (product) => {
    console.log(product);
    startActiveUpdateProduct();
    startIdActiveProduct(product);
    openDateModal();
  }

  return (


    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} >

      
    
    {
      products.slice(0).reverse().map(product => (
        <Card sx={{ maxWidth: 345, mt: 2, ml: 3, borderRadius: '15px' }} key={product.id}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              G
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={product.name}
          subheader={product.category?.name}
        />
        <CardMedia
          component="img"
          height="194"
          image={product.image ? product.image.secure_url : 'http://localhost:3000/src/assets/1.jpg'}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {
            product.price
           }
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton onClick={()=>onUpdate(product)} aria-label="add to favorites" size="small" sx={{ mr: 1, color: 'secondary.main' }}>
            <AutoFixHigh  />
          </IconButton>

          <IconButton aria-label="share" size="small" sx={{ color: 'secondary.main' }}>
            <DeleteForever />
          </IconButton>

          <ExpandMore
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
            <Typography paragraph>Descripción:</Typography>
            <Typography paragraph>
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
