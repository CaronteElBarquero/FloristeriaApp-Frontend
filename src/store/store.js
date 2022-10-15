import { configureStore } from '@reduxjs/toolkit';
import { authSlice, uiSlice, categorySlice } from './';



export const store = configureStore({

    //Nombre de los reducer que tenemos hasta el momento
    reducer: {

        auth: authSlice.reducer,
        category: categorySlice.reducer,

        ui: uiSlice.reducer
        
    },


    
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
});