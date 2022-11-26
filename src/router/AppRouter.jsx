
import { useContext, useEffect, useMemo, useState } from 'react';
import { useAuthStore } from '../hooks';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { FloristeriaRoute } from '../floristeria/routes/FloristeriaRoute';
import { useCategoryStore } from '../hooks/useCategoryStore';

import { HomePage } from '../ui/pages/HomePage';


import { InitionRoutes } from '../ui/routes/InitionRoutes';

export const AppRouter = () => {

    const { checkAuthToken, status } = useAuthStore();
    const { startLoadingCategory } = useCategoryStore();
    const navigate = useNavigate();
   
  


    useEffect(() => {
        checkAuthToken();
        startLoadingCategory();
        navigate('/dash');
        
    }, []);


    useEffect(() => {
        if (status === 'authenticated') {
            navigate('/dash');
        }
    }, [status]);


    if (status === 'checking') {
        return (
            <h1>Checking...</h1>
        )
    }












    return (

        <Routes>

            {/* verificar bien las rutas */}

            {
                ( status === 'authenticated'  ) 
                    

                    ? (
                        <>

                            <Route path="/*" element={<FloristeriaRoute />} />


                        </>

                    )   
                    : (

                        <>

                            <Route path="/" element={<InitionRoutes />} />

                            <Route path="/auth/*" element={<AuthRoute />} />


                            {/* CAUSANTE ERROR 404 */}
                            <Route path='/*' element={ <Navigate to="/" /> } />


                        </>
                    )
            }
            

            

        </Routes>

    )
}
