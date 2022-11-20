import { useSelector } from 'react-redux';

import { Autocomplete, Stack, TextField } from '@mui/material';
import { CardCustomer } from './CardCustomer';

export const AutoCustomer = () => {

    const { customers } = useSelector( state => state.customer );

    // const options = customers.map( customer => customer.name );




    return (

    

        <Stack spacing={2} sx={{ width: 300, ml: 2.5, mt: 2 }}>

   

            <Autocomplete
                id="combo-box-demo"
                options={customers}
                getOptionLabel={(option) => option.name + ' ' + option.lastName}
                style={{ width: 250, }}
                renderInput={(params) => <TextField {...params} label="Clientes"  />}
            />
            {/* <CardCustomer /> */}




      

        </Stack>




    
     
    );
}

