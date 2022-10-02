
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './';



export const store = configureStore({


    //Nombre de los reducer que tenemos hasta el momento

    reducer: {

        auth: authSlice.reducer
        
    },



    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })


});