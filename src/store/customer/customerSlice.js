import { createSlice } from '@reduxjs/toolkit';




export const customerSlice = createSlice({


    name: 'customer',

    initialState: {


        customers: [

        ],

        activeCreateCustomer: false,
        activeUpdateCustomer: false,

        activeCustomer: {
            name: '',
            lastName: '',
            email: '',
            phone: '',
            sonInlaw: '',
        },

    },
    
    reducers: {

        onSetActiveCustomer: (state, { payload }) => {
            state.activeCustomer = payload;
        },

        onAddNewCustomer: (state, { payload }) => {
            state.customers.push(payload);
            state.activeCustomer = null;
            state.activeCreateCustomer = true;
            state.activeUpdateCustomer = false;
        },

        
        onActiveCustomer: (state, { payload }) => {
            state.activeCustomer = payload;
        },


        onActiveCreateCustomer: (state) => {
            state.activeCreateCustomer = true;
            state.activeUpdateCustomer = false;
        },

        
        onLoadCustomer: (state, { payload }) => {
            state.customers = payload;
        },


        onActiveUpdateCustomer: (state) => {
            state.activeUpdateCustomer = true;
            state.activeCreateCustomer = false;
        },


        onUpdateCustomer: (state, { payload }) => {
            
            state.customers = state.customers.map((customer) => {

                if (customer.id === payload.id) {
                    return payload;
                }
                return customer;
            });

            state.activeUpdateCustomer = true;

        },


        onDeleteCustomer: (state, { payload }) => {
            state.customers = state.customers.filter((customer) => customer.id !== payload);
        }



          

    }


});


export const { 
    
    onSetActiveCustomer, onAddNewCustomer, onActiveCustomer, onActiveCreateCustomer, onLoadCustomer, onActiveUpdateCustomer, onUpdateCustomer,
    onDeleteCustomer,


} = customerSlice.actions;