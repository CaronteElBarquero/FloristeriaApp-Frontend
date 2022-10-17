import { configureStore } from '@reduxjs/toolkit';
import { authSlice, uiSlice, categorySlice, productSlice} from './';



export const store = configureStore({

    //Nombre de los reducer que tenemos hasta el momento
    reducer: {

        auth: authSlice.reducer,
        category: categorySlice.reducer,
        product: productSlice.reducer,
        ui: uiSlice.reducer
        
    },


    
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
});