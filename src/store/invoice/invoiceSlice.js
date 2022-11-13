import { createSlice } from '@reduxjs/toolkit';

export const invoiceSlice = createSlice({

    name: 'invoice',

    initialState: {

        invoices: [
        ],

        activeCreateInvoice: false,
        // activeUpdateInvoice: false,

        activeInvoice: {
            nroInvoice: '',
            invoiceDate: '',
            dueDate: '',
            products: [],
            discount: '',
            notes: '',
            total: ''

        },

    },

    reducers: {

        onSetActiveInvoice: (state, { payload }) => {
            state.activeInvoice = payload;
        },

        onAddNewInvoice: (state, { payload }) => {
            state.invoices.push(payload);
            state.activeInvoice = null;
            state.activeCreateInvoice = true;
            // state.activeUpdateInvoice = false;
        },


        onActiveInvoice: ( state, { payload } ) => {
            state.activeInvoice = payload;
        },

        onActiveCreateInvoice: (state) => {
            state.activeCreateInvoice = true;
            // state.activeUpdateInvoice = false;
        },


        onLoadInvoice: (state, { payload }) => {
            state.invoices = payload;
        },


        onDeleteInvoice: (state, { payload }) => {
            state.invoices = state.invoices.filter( invoice => invoice.id !== payload );
        },


        
    }

});


export const { 

    onSetActiveInvoice, 
    onAddNewInvoice, 
    onActiveCreateInvoice, 
    onActiveInvoice,
    onLoadInvoice,
    onDeleteInvoice  

} = invoiceSlice.actions;