import { Navigate, Route, Routes } from "react-router-dom"
import { SpeelProduct, SpeelCategory } from "../components"
import {  FloristeriaPage  } from "../pages"
// import { Floristeria404 } from "../../ui/components"



export const FloristeriaRoute = () => {
    
    return (

        <Routes>

            {/* Rutas Iniciales de la aplicacion */}


            {/* Ruta las cuales entrara en la aplicacion */}
            <Route path="product" element={ <SpeelProduct /> }  />
            
            <Route path="category" element={ <SpeelCategory /> }  />

            <Route path="/" element={ <FloristeriaPage /> }  />

            {/* <Route path="/*" element={ <Floristeria404 /> }  /> */}

            <Route path="/*" element={ <Navigate to="/" /> }  />

        </Routes>
    
    )
}
