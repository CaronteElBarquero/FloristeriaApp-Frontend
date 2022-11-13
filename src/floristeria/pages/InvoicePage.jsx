import {  Button, Divider, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useInvoiceStore, useProductStore } from "../../hooks"
import { DraweBar } from "../../ui/components"


import { InvoiceTable } from "../components"

import { onActiveInvoice, onAddNewInvoice, onActiveCreateInvoice, onSetActiveInvoice } from '../../store';

// import { AutoCustomer, CardCustomer, CustomerModal } from "../components"

export const InvoicePage = () => {


    const navigate = useNavigate();

    // const {  } = useSelector( state => state.customer );
    
    const {         setActiveInvoice,
        startActiveIdInvoice,
        startActiveCreateInvoice } = useInvoiceStore();
    


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

            <Button onClick={ handleNewInvoice }>
                Factura
            </Button>

            <Divider />

            <InvoiceTable />


        </DraweBar>
        
    )


}
