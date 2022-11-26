import {useEffect} from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoute } from '../../auth/routes/AuthRoute';
import { useAuthStore } from '../../hooks';
import { useCategoryStore } from '../../hooks/useCategoryStore';


import { HomePage } from '../pages/HomePage';



export const InitionRoutes = () => {

    const { checkAuthToken, status } = useAuthStore();




    return (

        <Routes>

            {
                ( status === 'authenticated' )

                    ? (
                        <Route path="/*" element={ <Navigate to="/dash" /> } />
                    )
                    : (
                        <Route path="/*" element={ <HomePage /> } />
                    )

            }



        </Routes>
    
    )
}
