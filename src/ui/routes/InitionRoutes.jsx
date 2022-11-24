import {useEffect} from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoute } from '../../auth/routes/AuthRoute';
// import { SpeelProduct, SpeelCategory } from "../components"
// import {  FloristeriaPage  } from "../pages"
// import { Floristeria404 } from "../../ui/components"
import { useCategoryStore } from '../../hooks/useCategoryStore';


import { HomePage } from '../pages/HomePage';



export const InitionRoutes = () => {





    return (

        <Routes>

            

            <Route path="/" element={ <HomePage /> } />

            <Route path='/*' element={ <Navigate to="/" /> } />

    




        </Routes>
    
    )
}
