import React, { useState, useEffect } from "react"
import { CategoryModal, SpeelProduct, PrimerGrafica, Tarjetones, BotonesNavigate, ProductStock } from "../components"
import { DraweBar } from "../../ui/components"
import { Typography } from "@mui/material"
import { floristeriaApi } from "../../api"
import { NumberUser } from "../Graficas/NumberUser"
// import EarningCard from "../components/InittionImages"
// import { ProductPage } from "./ProductPage"


export const FloristeriaPage = () => {
  const [product, setProduct] = useState();
  const [customers, setCustomers] = useState();

  const getProduct = async () => {
    const products = await floristeriaApi.get('/product');
    const customers = await floristeriaApi.get('/customer');
    setProduct(products.data.products);
    setCustomers(customers.data.customers);
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
      <br />


      <Tarjetones />

      <br />

      {/* <PrimerGrafica /> */}
      <ProductStock products={product} />
      <NumberUser users={customers} />

    </DraweBar>
  )
}
