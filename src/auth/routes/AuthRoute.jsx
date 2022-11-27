import { Navigate, Route, Routes } from "react-router-dom"
import { useAuthStore } from "../../hooks";
import { LoginPage, RegisterPage } from "../pages"



export const AuthRoute = () => {

    const { checkAuthToken, status } = useAuthStore();





    return (

        <Routes>







            <>

                <Route path="login" element={<LoginPage />} />

                <Route path="register" element={<RegisterPage />} />

                {/* <Route path="/*" element={ <Navigate to="/login" /> } /> */}

            </>




        </Routes>


    )

}
