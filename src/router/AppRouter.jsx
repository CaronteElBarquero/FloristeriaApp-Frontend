
import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { AcercaDe, FloristeriaPage, InicioPage } from '../floristeria/pages';
import { FloristeriaRoute } from '../floristeria/routes/FloristeriaRoute';
import { useAuthStore } from '../hooks';


export const AppRouter = () => {



    // const authStatus = 'not-authenticated';

    const {  checkAuthToken, status } = useAuthStore();



    useEffect(() => {
        checkAuthToken();
    }, []);


    // if ( status === 'checking' ) {
    //     return (
    //         <h3>Cargando...</h3>
    //     )
    // }

    



    // Todo: VOLVER A IMPLENTAR
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if(authStatus === 'not-authenticated'){
    //         navigate('/auth/login');
    //     }
    
    // }, [authStatus])
    


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
                            <Route path="/*" element={ <Navigate to="/" /> } />   

                        </>
                    )
            }           
            



            //TODO: VOLVER A IMPLEMENTAR
            {/* <Route path="inicio" element={ <InicioPage /> }  />
            <Route path="contacto" element={ <AcercaDe /> }  /> */}
            



            {/*  Login y Registro */}
            {/* // <Route  path='/auth/*' element={ <AuthRoute /> }  /> */}
    
            {/* FloristeriaApp */}
            {/* <Route path='/*' element={ <FloristeriaRoute /> }  /> */}


        </Routes>





    )

}
