import {  Divider, Typography } from "@mui/material"
import { DraweBar } from "../../ui/components"
import { AutoCustomer, CardCustomer, CustomerModal, SpeelCustomer } from "../components"

export const CustomerPage = () => {

    return (

        <DraweBar>

            <Typography variant="h4"  align="center" ><strong>Listado de Clientes</strong></Typography>
            <Divider />
            {/* <h1>Bienvenido a categoria</h1> */}
            
            {/* <AutoCustomer /> */}
            <SpeelCustomer />
            <br />
            <CardCustomer />
            <CustomerModal />
            



         </DraweBar>
        
    )


}
