import {  Button, Divider, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { DraweBar } from "../../ui/components"


import { InvoiceTable } from "../components"

// import { AutoCustomer, CardCustomer, CustomerModal } from "../components"

export const InvoicePage = () => {


    const navigate = useNavigate();

    const toCreate = () => {
        navigate('/create');
    }


    return (

        <DraweBar>

            <Typography variant="h4"  align="center" ><strong>Listado de Facturas</strong></Typography>

            <Button onClick={ toCreate }>
                Factura
            </Button>

            <Divider />

            <InvoiceTable />


        </DraweBar>
        
    )


}
