import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatter } from '../helpers';
import { useCustomerStore, useInvoiceStore, useProductStore } from '../../hooks';

import { Box, Button, Card, CardActions, CardContent, Typography} from '@mui/material';
import { AttachMoney, BookmarkBorder } from '@mui/icons-material';
import moment from 'moment';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




export const Tarjetones = () => {

  const { startLoadingInvoice } = useInvoiceStore();
  const { startLoadingProduct } = useProductStore();
  const { startLoadingCustomer } = useCustomerStore();


  const { invoices } = useSelector( state => state.invoice )
  const { products } = useSelector( state => state.product )
  const { customers } = useSelector( state => state.customer )

  const { categories } = useSelector( state => state.category )




  useEffect(() => {
    startLoadingInvoice()
    startLoadingProduct()
    startLoadingCustomer()
  }, [])



  //sumar el total de todos los invoices
  const total = invoices.reduce( (acc, invoice) => acc + invoice.total, 0 )

  //contar el numero de facturas
  const count = invoices.length

  //contar el numero de categorias
  const countCategory = categories.length


  //contar el numero de productos
  const countProducts = products.length

  //contar el numero de clientes
  const countClients = customers.length




  //la suma de las ventas del dia de hoy
  const today = new Date();
  const todayDate = moment(today).format('DD/MM/YYYY');
  const todayInvoices = invoices.filter( invoice => moment(invoice.invoiceDate).add(1,'days').format('DD/MM/YYYY') === todayDate )
  const todayTotal = todayInvoices.reduce( (acc, invoice) => acc + invoice.total, 0 )

  const dateToday = moment(today).format('ll');


  //total de ventas del dei dia de hoy
  const todayCount = todayInvoices.length




  //total de las ventas el mes de hoy
  // const month = new Date().toLocaleDateString().split('-')[1]
  // const totalMonth = invoices.filter( invoice => invoice.invoiceDate.split('/')[1] === month ).reduce( (acc, invoice) => acc + invoice.total, 0 )
  // console.log(totalMonth)
 




  return (
    <>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', minWidth: 310, width: '100%', mt: 4 }} columns={5} gap={4} >
      {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', mt: 3, ml: 6 }}   gap={6} > */}

        <Card 
          sx={{ 
            minWidth: 240, borderRadius: '15px', color:'#ffff', 
            // background: '#c22557', 
            backgroundImage: 'url(https://res.cloudinary.com/dwozn2lvh/image/upload/v1668462977/Tarjetones/Dise%C3%B1o_sin_t%C3%ADtulo_6_v19tna.png)',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center", 
          }}
        >
          <CardContent>
              <Typography sx={{ fontSize: 15, color: 'ffff' }} color="text.secondary" gutterBottom>
                  <AttachMoney sx={{ color: '#fff', width: '25x' }}  />  <strong>Ventas Totales</strong>
              </Typography>
              <br />

              <Typography sx={{ fontSize: 35, textAlign: 'rigth' }} variant="body2" textAlign='left' >
                  <strong>{ formatter.format(total) }</strong>
                  {/* { formatter.format(total) } */}
              </Typography>
          </CardContent>
        </Card>


        <Card 
          sx={{ 
            minWidth: 250, borderRadius: '15px', color:'#ffff', 
            background: '#c22557',
            backgroundImage: 'url(https://res.cloudinary.com/dwozn2lvh/image/upload/v1668463999/Tarjetones/Dise%C3%B1o_sin_t%C3%ADtulo_12_ncu38r.png)',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",  
          }}
        >
          <CardContent>
              <Typography sx={{ fontSize: 15, color: 'ffff' }} color="text.secondary" gutterBottom>
                  <BookmarkBorder sx={{ color: '#fff', width: '25x' }}  />  <strong>Total De Ordenes</strong>
              </Typography>
              <br />

              <Typography variant="body2" textAlign='left' sx={{ fontSize: 35, textAlign: 'left' }} >
                  { count }
              </Typography>
          </CardContent>
        </Card>


        <Card 
          sx={{ 
            minWidth: 250, borderRadius: '15px', color:'#ffff', 
            background: '#c22557',
            backgroundImage: 'url(https://res.cloudinary.com/dwozn2lvh/image/upload/v1668464042/Tarjetones/Dise%C3%B1o_sin_t%C3%ADtulo_13_jfs1mj.png)',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",  
          }}
        >
          <CardContent>
              <Typography sx={{ fontSize: 15, color: 'ffff' }} color="text.secondary" gutterBottom>
                  <BookmarkBorder sx={{ color: '#fff', width: '25x' }}  />  <strong>Total De Categorias</strong>
              </Typography>
              <br />

              <Typography  variant="body2" textAlign='left' sx={{ fontSize: 35, textAlign: 'left' }} >
                  { countCategory }
              </Typography>
          </CardContent>
        </Card>


        <Card 
          sx={{ 
            minWidth: 250, borderRadius: '15px', color:'#ffff', 
            background: '#c22557',
            backgroundImage: 'url(https://res.cloudinary.com/dwozn2lvh/image/upload/v1668463885/Tarjetones/Dise%C3%B1o_sin_t%C3%ADtulo_11_sfe6ex.png)',  
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >
          <CardContent>
              <Typography sx={{ fontSize: 15, color: 'ffff' }} color="text.secondary" gutterBottom>
                  <BookmarkBorder sx={{ color: '#fff', width: '25x' }}  />  <strong>Total De Productos</strong>
              </Typography>
              <br />

              <Typography  variant="body2" textAlign='left' sx={{  fontSize: 35, textAlign: 'left' }} >
                  { countProducts }
              </Typography>
          </CardContent>
        </Card>


        <Card 
          sx={{ 
            minWidth: 250, borderRadius: '15px', color:'#ffff', 
            background: '#c22557',
            backgroundImage: 'url(https://res.cloudinary.com/dwozn2lvh/image/upload/v1668464418/Tarjetones/Dise%C3%B1o_sin_t%C3%ADtulo_14_ekvn2m.png)',  
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >
          <CardContent>
              <Typography sx={{ fontSize: 15, color: 'ffff' }} color="text.secondary" gutterBottom>
                  <BookmarkBorder sx={{ color: '#fff', width: '25x' }}  />  <strong>Total De Clientes</strong>
              </Typography>
              <br />

              <Typography  variant="body2" textAlign='left' sx={{  fontSize: 35, textAlign: 'left' }} >
                  { countClients }
              </Typography>
          </CardContent>
        </Card>


        <Card 
          sx={{ 
            minWidth: 250, borderRadius: '15px', color:'#ffff', 
            background: '#c22557',
            backgroundImage: 'url(https://res.cloudinary.com/dwozn2lvh/image/upload/v1668465863/Tarjetones/Dise%C3%B1o_sin_t%C3%ADtulo_16_bxkk46.png)',  
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >
          <CardContent>
              <Typography sx={{ fontSize: 15, color: 'ffff' }} color="text.secondary" gutterBottom>
                  <BookmarkBorder sx={{ color: '#fff', width: '25x' }}  />  <strong>{ `Total, ${dateToday}`} </strong>
                  
              </Typography>
              <br />

              <Typography  variant="body2" textAlign='left' sx={{  fontSize: 35, textAlign: 'left' }} >
                  { formatter.format(todayTotal) }
              </Typography>
          </CardContent>
        </Card>


        <Card 
          sx={{ 
            minWidth: 250, borderRadius: '15px', color:'#ffff', 
            background: '#c22557',
            backgroundImage: 'url(https://res.cloudinary.com/dwozn2lvh/image/upload/v1668465864/Tarjetones/Dise%C3%B1o_sin_t%C3%ADtulo_15_rddoae.png)',  
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >
          <CardContent>
              <Typography sx={{ fontSize: 15, color: 'ffff' }} color="text.secondary" gutterBottom>
                  <BookmarkBorder sx={{ color: '#fff', width: '25x' }}  />  <strong>{ `Ventas, ${dateToday}`} </strong>
                  
              </Typography>
              <br />

              <Typography  variant="body2" textAlign='left' sx={{  fontSize: 35, textAlign: 'left' }} >
                  { todayCount }
              </Typography>
          </CardContent>
        </Card>




       
     







      </Box>
    </>
  );
}



