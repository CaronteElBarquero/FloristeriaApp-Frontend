import { createSlice } from '@reduxjs/toolkit';

export const invoiceSlice = createSlice({

    name: 'invoice',

    initialState: {

        invoices: [
        ],

        activeCreateInvoice: false,
        activeUpdateInvoice: false,

        activeInvoice: {
            nroInvoice: '',
            dateSale: '',
            product: [],
            subTotal: '',
            discount: '',
            tax: '',
            total: ''

        },

    },

    reducers: {

        onSetActiveInvoice: (state, { payload }) => {
            state.activeInvoice = payload;
        },



    }

});


export const { onSetActiveInvoice } = invoiceSlice.actions;