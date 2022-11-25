import {useEffect} from 'react';

import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

import { SpeelProduct, SpeelCategory, SpeelCustomer, CreateInvoice,  } from "../components"

import {  FloristeriaPage, InvoicePage  } from "../pages"

import { useCategoryStore } from '../../hooks/useCategoryStore';
import { useAuthStore, useProductStore } from '../../hooks';


export const FloristeriaRoute = () => {

    const { checkAuthToken, status } = useAuthStore();

    const { startLoadingCategory, categories} = useCategoryStore();
    const { startLoadingProduct} = useProductStore();

    const navigate = useNavigate();


    useEffect(() => {
        startLoadingCategory();
        startLoadingProduct()

    }, []);






    return (

        <Routes>

            {/* Ruta las cuales entrara en la aplicacion */}

            <Route path="dash" element={ <FloristeriaPage /> } />


            <Route path="product" element={ <SpeelProduct /> }  />
            <Route path="category" element={ <SpeelCategory /> }  />
            <Route path="customer" element={ <SpeelCustomer /> }  />
            <Route path="invoice" element={ <InvoicePage /> }  />
            <Route path="create" element={ <CreateInvoice /> }  />

            <Route path="/*" element={ <Navigate to="/home/dash" /> } />



        </Routes>
    
    )
}
