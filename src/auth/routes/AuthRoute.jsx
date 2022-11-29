import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import React, { useEffect } from "react";
import { useAuthStore } from "../../hooks";
import { LoginPage, RegisterPage } from "../pages"



export const AuthRoute = () => {

    const { checkAuthToken, status } = useAuthStore();
    const navigate = useNavigate();



    return (

        <Routes>


            <>

                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="/*" element={<Navigate to="/auth/login" />} />

                {/* <Route path="/*" element={ <Navigate to="/login" /> } /> */}

            </>




        </Routes>


    )

}
