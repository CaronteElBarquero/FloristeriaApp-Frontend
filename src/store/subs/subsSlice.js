import { createSlice } from '@reduxjs/toolkit';






export const subsSlice = createSlice({

    name: 'subs',

    
    initialState: {

        subscriptions: [
        ],

        activeCreateSubs: false,
        errorMessage: undefined,

    },

    reducers: {

        onAddNewSubs: (state, { payload }) => {
            state.subscriptions.push(payload);
            state.activeCreateSubs = true;
        },

        onNotCreateSubs: ( state, { payload } ) => {
            state.activeCreateSubs = false;
            state.errorMessage = payload;
        },


        errorClear: ( state, { payload } ) => {
            state.errorMessage = undefined;
        }

    
    }
});


export const { activeCreateSubs, onAddNewSubs, onNotCreateSubs, errorMessage,errorClear } = subsSlice.actions;