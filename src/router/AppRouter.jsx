
import { useEffect } from 'react';
import { useAuthStore } from '../hooks';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { FloristeriaRoute } from '../floristeria/routes/FloristeriaRoute';


export const AppRouter = () => {

    const {  checkAuthToken, status } = useAuthStore();


    useEffect(() => {
        checkAuthToken();
    }, []);

    
    return (

        <Routes>

            {
                ( status === 'not-authenticated' || status === 'checking' )
                    ? (
                        <>
                            <Route path="/auth/*" element={ <AuthRoute /> } />
                            <Route path="/*" element={ <Navigate to="/auth/login" /> } />   
                        </>

                    )
                    : (

                        <>

                            <Route path="/*" element={ <FloristeriaRoute /> }  />
                            {/* <Route path="/product" element={ <ProductPage /> }  /> */}

                            <Route path="/*" element={ <Navigate to="/" /> } />   

                        </>
                    )
            }           
            
        </Routes>

    )
}
