import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useInvoiceStore, useProductStore } from "../../hooks"

import {  Button, Divider, Typography } from "@mui/material"
import { DraweBar } from "../../ui/components"

import { InvoiceTable } from "../components"

import { onActiveInvoice, onAddNewInvoice, onActiveCreateInvoice, onSetActiveInvoice } from '../../store';
import { Receipt } from "@mui/icons-material"

// import { AutoCustomer, CardCustomer, CustomerModal } from "../components"

export const InvoicePage = () => {


    const navigate = useNavigate();

    // const {  } = useSelector( state => state.customer );
    
    const { startActiveIdInvoice, startActiveCreateInvoice } = useInvoiceStore();
    


    const handleNewInvoice = () => {

        startActiveIdInvoice({
            nroInvoice: '',
            invoiceDate: '',
            dueDate: '',
            product: [],
            discount: '',
            isv: '',
            total: '',
        });
        
        startActiveCreateInvoice();
        navigate('/create');
    };
    

    return (

        <DraweBar>

            <Typography variant="h4"  align="center" ><strong>Ventas y Facturas</strong></Typography>

            <Button 
                variant="contained" 
                onClick={ handleNewInvoice }
                sx={{ mt: 1, background: 'linear-gradient(100deg, #C22557 15%, #ED5887 79%, #FFF 150%)' }}
                startIcon={ <Receipt /> }
            >
                Crear Factura
            </Button>

            <Divider />

            <InvoiceTable />


        </DraweBar>
        
    )


}
