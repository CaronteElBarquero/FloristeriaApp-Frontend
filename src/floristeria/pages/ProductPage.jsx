import { Box, Divider, Typography } from "@mui/material";
import { CardProducts, ProductModal, SpeelProduct } from "../components";
import { DraweBar } from "../../ui/components"


export const ProductPage = () => {



  return (

    <DraweBar>

      <Typography variant="h4"  align="center" ><strong>Listado de productos</strong></Typography>

      <Divider  />  

      <SpeelProduct />
      <br />
      <CardProducts />
      <ProductModal />

    </DraweBar>
    
  );
};
