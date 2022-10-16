import { useState } from 'react';

import { styled } from '@mui/material/styles';
import { Avatar, Card, CardHeader, CardMedia, CardContent,CardActions, Collapse, IconButton,Typography, Box } from '@mui/material'
import { red } from '@mui/material/colors';

import { Favorite, Share, MoreVert, DeleteForever, AutoFixHigh } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (


    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} >
    
      <Card sx={{ maxWidth: 345, mt: 2, ml: 3, borderRadius: '15px' }}>
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
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="http://localhost:3000/src/assets/3.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" size="small" sx={{ mr: 1, color: 'secondary.main' }}>
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
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      

    </Box>



  );
}
