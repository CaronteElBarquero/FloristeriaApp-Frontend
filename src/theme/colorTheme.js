import { ThemeContext } from "@emotion/react";
import { createTheme, Typography } from "@mui/material";
import { red } from '@mui/material/colors';



export const colorTheme = createTheme({

    palette: {

        primary: {
            main: '#c22557'
        },

        secondary: {
            main: '#ed5887'
        },

        error: {
            main: red.A400
        }   
    },

    typography: {
        fontFamily: 'poppins'
    }




});