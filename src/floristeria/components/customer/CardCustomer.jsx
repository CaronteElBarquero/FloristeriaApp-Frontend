import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useCustomerStore, useUiStore } from '../../../hooks';

import { AutoFixHigh, DeleteForever, Email, Man, Phone, Search, Wc, Woman } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, Divider, IconButton, Typography } from '@mui/material';

import { motion } from "framer-motion";
import { variantsCard } from '../../../animation/framerValues';


import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { useState } from 'react';
import { SearchInput } from '../SearchInput';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




export const CardCustomer = () => {


  const { customers } = useSelector( state => state.customer );
  const { startLoadingCustomer, startActiveIdCustomer, startActiveUpdateCustomer, startDeleteCustomer } = useCustomerStore();

  const { openDateModal } = useUiStore();
  


  //Filtrar por palabra
  const [inputSearch, setInputSearch] = useState("")
  const [customerData, setCustomerData] = useState(customers);



  const MotionCard = motion(Card);


  useEffect(() => {
    startLoadingCustomer();
  }, [])


  useEffect(() => {
    if (inputSearch.length === 0) return setCustomerData(customers);

    //filtrar por nombre o apellido


    setCustomerData(
      customerData.filter(customer =>
        customer.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()),

      ),
    );

   
  }, [inputSearch, customers]);



  const onUpdate = ( customer ) => {
    startActiveUpdateCustomer();
    startActiveIdCustomer( customer );
    openDateModal()
  };


  const onDelete = (customerId) => {
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

        startDeleteCustomer( customerId );

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
  };


  const onFilterText = (e) => {
    setFilter(e.target.value);
  };

  


  return (

    <>
        
      <br />
      <br />

      <SearchInput onChange={setInputSearch} />

    
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 310, width: '100%', mt: 2 }} >

        {
          customerData.slice(0).reverse().map( customer => (

            <MotionCard 
              whileHover="hover"
              initial="hidden"
              animate="visible"
              variants={variantsCard}
              onChange={ onFilterText }
              sx={{
                minWidth: 260, m: 0.5, mt: 2.5,
                borderWidth: 0.3,
                borderRadius: '25px', 
              }} 
              key={ customer.id } 
            >
              <CardContent>

                <Typography sx={{ fontSize: 16 }} textAlign='center' variant='h3'  gutterBottom>
                  <strong>{ customer.name }</strong>
                </Typography>

                <Typography sx={{ fontSize: 16 }} textAlign='center' variant='h3'  gutterBottom>
                  <strong>{ customer.lastName }</strong>
                </Typography>


                <Typography sx={{ mt: 1.5 }} variant="subtitle2" component="div">
                  <Email sx={{ m: 0.1, color: '#c22557' }} /> { customer.email }
                </Typography>

                <Typography sx={{ mt: 1.5 }} variant="subtitle2" color="text.secondary">
                  <Phone sx={{ m: 0.1, color: '#c22557' }} />{ customer.phone }
                </Typography>
                <Typography sx={{ mt: 1.5 }} variant="body2">

                  {customer.sonInlaw === 'Femenino' ? <Woman sx={{ m: 0.1, color: '#c22557' }}/> : <Man sx={{ m: 0.1, color: '#c22557' }}/>}
                  
                  { customer.sonInlaw }
                </Typography>
              </CardContent>

              <CardActions>
                <IconButton onClick={() => onUpdate( customer )} aria-label="add to favorites" size="small" sx={{ ml: 2, color: 'secondary.main' }}>
                  <AutoFixHigh />
                </IconButton>

                <IconButton onClick={() => onDelete( customer.id )} aria-label="share" size="small" sx={{ ml: 1.5, color: 'secondary.main' }}>
                  <DeleteForever />
                </IconButton>

              </CardActions>
            </MotionCard>

          ))
        }
      </Box>
    </>

  );
}
    