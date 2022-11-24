
import { useEffect } from 'react';
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
   




    //memorizar el estado de la autenticacion

    useEffect(() => {
        checkAuthToken();
        startLoadingCategory();

        
    }, []);

    

    return (

        <Routes>

            {
                (status === 'not-authenticated' || status === 'checking')

                    ? (
                        <>


                            
                            <Route path="/*" element={<InitionRoutes />} />
                            {/* <Route path="/initio" element={<HomePage />} /> */}

                            <Route path="/auth/*" element={<AuthRoute />} />

                        </>

                    )
                    : (

                        <>

                            <Route path="/*" element={<FloristeriaRoute />} />
                            {/* <Route path="/product" element={ <ProductPage /> }  /> */}

                            <Route path="/*" element={<Navigate to="/" />} />

                        </>
                    )
            }

        </Routes>

    )
}
