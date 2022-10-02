import { Navigate, Route, Routes } from "react-router-dom"
import { AcercaDe, FloristeriaPage, InicioPage } from "../pages"



export const FloristeriaRoute = () => {
    

    return (

        <Routes>

            {/* Rutas Iniciales de la aplicacion */}
            <Route path="inicio" element={ <InicioPage /> }  />
            <Route path="contacto" element={ <AcercaDe /> }  />



            {/* Ruta las cuales entrara en la aplicacion */}
            <Route path="/" element={ <FloristeriaPage /> }  />


            <Route path="/*" element={ <Navigate to="/" /> }  />

        </Routes>
    
    )
}
