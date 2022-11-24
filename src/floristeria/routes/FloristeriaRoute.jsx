import {useEffect} from 'react';

import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

import { SpeelProduct, SpeelCategory, SpeelCustomer, CreateInvoice,  } from "../components"

import {  FloristeriaPage, InvoicePage  } from "../pages"

import { useCategoryStore } from '../../hooks/useCategoryStore';


export const FloristeriaRoute = () => {

    const { startLoadingCategory, categories} = useCategoryStore();
    const navigate = useNavigate();


    useEffect(() => {
        startLoadingCategory();

    }, []);


    return (

        <Routes>

            {/* Rutas Iniciales de la aplicacion */}


            {/* Ruta las cuales entrara en la aplicacion */}
            <Route path="product" element={ <SpeelProduct /> }  />
            
            <Route path="category" element={ <SpeelCategory /> }  />

            <Route path="customer" element={ <SpeelCustomer /> }  />

            <Route path="invoice" element={ <InvoicePage /> }  />

            <Route path="create" element={ <CreateInvoice /> }  />




            <Route path="dash" element={ <FloristeriaPage /> }  />

            {/* <Route path="/*" element={ <Floristeria404 /> }  /> */}

            <Route path="/*" element={ <Navigate to="/dash" /> }  />

        </Routes>
    
    )
}
