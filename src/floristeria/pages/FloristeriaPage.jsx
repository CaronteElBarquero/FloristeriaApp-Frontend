import React, { useState, useEffect } from "react"
import { CategoryModal, SpeelProduct, PrimerGrafica, Tarjetones, BotonesNavigate, ProductStock } from "../components"
import { DraweBar } from "../../ui/components"
import { Typography } from "@mui/material"
import { floristeriaApi } from "../../api"
// import EarningCard from "../components/InittionImages"
// import { ProductPage } from "./ProductPage"


export const FloristeriaPage = () => {
  const [product, setProduct] = useState();

  const getProduct = async () => {
    const { data } = await floristeriaApi.get('/product');
    setProduct(data.products);
  };

  useEffect(() => {
    getProduct();
  }, [])



  return (

    <DraweBar>

      {/* <InitionImages /> */}

      <Typography variant='h1' sx={{ fontSize: '45px', textAlign: 'center' }} >DashBoard NolyGifts</Typography>

      <BotonesNavigate />

      <br />

      {/* <Tarjetones /> */}

      {/* <PrimerGrafica /> */}
      <ProductStock products={product} />

    </DraweBar>
  )
}
