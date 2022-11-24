import {useEffect} from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
// import { SpeelProduct, SpeelCategory } from "../components"
// import {  FloristeriaPage  } from "../pages"
// import { Floristeria404 } from "../../ui/components"
import { useCategoryStore } from '../../hooks/useCategoryStore';


import { HomePage } from '../pages/HomePage';



export const InitionRoutes = () => {





    return (

        <Routes>

            

            <Route path="initio" element={ <HomePage /> } />

            <Route path="/*" element={ <Navigate to="/initio" /> } /> 




        </Routes>
    
    )
}
