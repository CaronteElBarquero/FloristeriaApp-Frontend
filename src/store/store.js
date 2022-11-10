import { configureStore } from '@reduxjs/toolkit';
import { authSlice, uiSlice, categorySlice, productSlice, customerSlice, subsSlice, invoiceSlice } from './';



export const store = configureStore({

    //Nombre de los reducer que tenemos hasta el momento
    reducer: {

        auth: authSlice.reducer,

        category: categorySlice.reducer,
        
        product: productSlice.reducer,

        customer: customerSlice.reducer,

        subs: subsSlice.reducer,

        invoice: invoiceSlice.reducer,

        ui: uiSlice.reducer
        
    },


    
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
});