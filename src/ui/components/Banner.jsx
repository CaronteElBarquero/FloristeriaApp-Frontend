import { Box, Grid } from "@mui/material"




export const Banner = () => {


    // const videoB = 'https://res.cloudinary.com/dwozn2lvh/image/upload/v1666903376/Banner_para_boda_Bienvenidos_a_nuestra_boda_1_l7mcnt.gif'
    const videoB = 'https://res.cloudinary.com/dwozn2lvh/video/upload/v1666903532/Banner.mp4'



    return (
        <>
            <br />  
        
            <Box component='main'  sx={{  width: '100%' }} xs='auto' >
                {/* <h1> hola, soy un banner </h1> */}
                <video
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted       
                    src={videoB} 
                />

            </Box>
        </>
    )
}
