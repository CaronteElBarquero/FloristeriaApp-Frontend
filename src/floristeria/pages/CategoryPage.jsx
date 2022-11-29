import { Divider, Typography } from "@mui/material"
import { DraweBar } from "../../ui/components"
import { CardCategory, CategoryModal, SpeelCategory } from "../components"
// import '../../style.css'

export const CategoryPage = () => {

    return (
        
        <DraweBar>

            <Typography variant="h4"  align="center" ><strong>Listado de categorias</strong></Typography>
            <Divider />
            {/* <h1>Bienvenido a categoria</h1> */}
            <br />
            <SpeelCategory />
            <CardCategory />
            <CategoryModal />



        </DraweBar>
    )
}
