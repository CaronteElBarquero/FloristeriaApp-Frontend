import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AttachMoney, BookmarkBorder } from '@mui/icons-material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const Tarjetones = () => {

  return (
    <>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 310, width: '100%', mt: 4 }} columns={4}  gap={3} >
        <Card sx={{ minWidth: 225, borderRadius: '15px', color:'#ffff', background: '#c22557'  }}>
          <CardContent>
              <Typography sx={{ fontSize: 17, color: 'ffff' }} color="text.secondary" gutterBottom>
                  <AttachMoney sx={{ color: '#fff', width: '25x' }}  />  <strong>Ventas Totales</strong>
              </Typography>
              <br />

              <Typography variant="body2" textAlign='left' >
                  L 120,000.00
              </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 225, borderRadius: '15px', color:'#ffff', background: '#c22557'  }}>
          <CardContent>
              <Typography sx={{ fontSize: 17, color: 'ffff' }} color="text.secondary" gutterBottom>
                  <BookmarkBorder sx={{ color: '#fff', width: '25x' }}  />  <strong>Total De Ordenes</strong>
              </Typography>
              <br />

              <Typography variant="body2" textAlign='left' sx={{ ml:2 }} >
                  1,500
              </Typography>
          </CardContent>
        </Card>



      </Box>
    </>
  );
}



