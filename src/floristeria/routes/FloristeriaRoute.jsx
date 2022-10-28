import {useEffect} from 'react';

import { Navigate, Route, Routes } from "react-router-dom"

import { SpeelProduct, SpeelCategory, SpeelCustomer } from "../components"

import {  FloristeriaPage  } from "../pages"

import { useCategoryStore } from '../../hooks/useCategoryStore';


export const FloristeriaRoute = () => {
    const { startLoadingCategory, categories} = useCategoryStore();
    
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


            <Route path="/" element={ <FloristeriaPage /> }  />

            {/* <Route path="/*" element={ <Floristeria404 /> }  /> */}

            <Route path="/*" element={ <Navigate to="/" /> }  />

        </Routes>
    
    )
}
