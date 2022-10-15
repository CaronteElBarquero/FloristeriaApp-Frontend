import { Box } from "@mui/material";
import { CardProducts, SpeelProduct } from "../components";
import { DraweBar } from "../../ui/components"


export const ProductPage = () => {

  return (

    <DraweBar>
      <h1>Bienvenido a productos</h1>
      <CardProducts />
    </DraweBar>
    
  );
};
