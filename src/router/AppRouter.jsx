
import { useContext, useEffect, useMemo, useState } from 'react';
import { useAuthStore, useProductStore } from '../hooks';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { FloristeriaRoute } from '../floristeria/routes/FloristeriaRoute';
import { useCategoryStore } from '../hooks/useCategoryStore';

import { HomePage } from '../ui/pages/HomePage';


import { InitionRoutes } from '../ui/routes/InitionRoutes';

export const AppRouter = () => {

    const { checkAuthToken, status } = useAuthStore();
    const { startLoadingCategory } = useCategoryStore();
    // const { startLoadingProduct } = useProductStore();
    const navigate = useNavigate();




    useEffect(() => {
        checkAuthToken();
        startLoadingCategory();
        // startLoadingProduct();

        navigate('/dash');

    }, []);


    if (status === 'checking') {
        return <h1></h1>
    }



    return (

        <Routes>

            {/* verificar bien las rutas */}

            {
                ( status === 'not-authenticated' || status === 'checking' )


                    ? (
                        <>

                        
                            <Route path="/*" element={<InitionRoutes />} />
                            <Route path="/auth/*" element={<AuthRoute />} />
                            {/* CAUSANTE ERROR 404 */}
                            {/* <Route path='/*' element={ <Navigate to="/" /> } /> */}

                        </>

                    )
                    : (

                        <>
                            <Route path="/*" element={<FloristeriaRoute />} />
                        </>
                    )

                    
            }

        </Routes>

    )
}
