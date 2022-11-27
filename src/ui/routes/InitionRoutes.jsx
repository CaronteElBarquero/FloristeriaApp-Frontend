import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { AuthRoute } from '../../auth/routes/AuthRoute';
import { useAuthStore } from '../../hooks';
import { useCategoryStore } from '../../hooks/useCategoryStore';


import { HomePage } from '../pages/HomePage';



export const InitionRoutes = () => {

    const { checkAuthToken, status } = useAuthStore();
    const navigate = useNavigate();


    useEffect(() => {

        if (status === 'not-authenticated') {
            navigate('/');
        }

    }, [status]);


    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>

    )
}
