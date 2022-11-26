import { Navigate, Route, Routes } from "react-router-dom"
import { useAuthStore } from "../../hooks";
import { LoginPage, RegisterPage } from "../pages"



export const AuthRoute = () => {

    const { checkAuthToken, status } = useAuthStore();





    return (

        <Routes>





            {
                ( status === 'not-authenticated'  )

                    ? (

                        <>

                        </>

                    )

                    : (
                        <Route path="/*" element={ <Navigate to="/dash" /> } />
                    )

            }



        </Routes>


    )

}
