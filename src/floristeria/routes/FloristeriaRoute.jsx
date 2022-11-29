import { useEffect } from 'react';

import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

import { CreateInvoice } from "../components"

import { CategoryPage, CustomerPage, FloristeriaPage, InvoicePage, ProductPage } from "../pages"

import { useCategoryStore } from '../../hooks/useCategoryStore';
import { useAuthStore, useProductStore } from '../../hooks';


export const FloristeriaRoute = () => {

    const { checkAuthToken, status } = useAuthStore();

    const { startLoadingCategory, categories } = useCategoryStore();
    const { startLoadingProduct } = useProductStore();




    useEffect(() => {
        startLoadingCategory();
        startLoadingProduct()
    }, []);




    return (

        <Routes>

            {/* Ruta las cuales entrara en la aplicacion */}



            {/* <> */}

                <Route path="dash" element={<FloristeriaPage />} />

                <Route path="product" element={<ProductPage />} />

                <Route path="category" element={<CategoryPage />} />
                <Route path="customer" element={<CustomerPage />} />
                <Route path="invoice" element={<InvoicePage />} />
                <Route path="create" element={<CreateInvoice />} />

                <Route path="/*" element={<Navigate to="/dash" />} />


            {/* </> */}






        </Routes>

    )
}
