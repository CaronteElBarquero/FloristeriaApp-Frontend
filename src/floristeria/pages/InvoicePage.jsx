import {  Divider, Typography } from "@mui/material"
import { DraweBar } from "../../ui/components"


import { InvoiceModal, InvoiceTable, SpeelInvoice } from "../components"

// import { AutoCustomer, CardCustomer, CustomerModal } from "../components"

export const InvoicePage = () => {

    return (

        <DraweBar>

            <Typography variant="h4"  align="center" ><strong>Listado de Facturas</strong></Typography>
            <Divider />

            <InvoiceTable />
            <InvoiceModal />

            {/* <SpeelInvoice /> */}



         </DraweBar>
        
    )


}
