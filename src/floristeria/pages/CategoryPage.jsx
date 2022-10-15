import { Divider, Typography } from "@mui/material"
import { DraweBar } from "../../ui/components"
import { CardCategory, CategoryModal } from "../components"
// import '../../style.css'

export const CategoryPage = () => {

    return (
        
        <DraweBar>

            <Typography variant="h4"  align="center" ><strong>Bienvenido a categorias</strong></Typography>
            <Divider />
            {/* <h1>Bienvenido a categoria</h1> */}
            
            <CardCategory />
            <CategoryModal />



        </DraweBar>
    )
}
