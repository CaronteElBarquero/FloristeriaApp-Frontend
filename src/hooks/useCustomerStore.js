import { useDispatch, useSelector } from "react-redux";


import { onActiveCreateCustomer, onActiveCustomer, onActiveUpdateCustomer, onAddNewCustomer, onDeleteCustomer, onLoadCustomer, onSetActiveCustomer, onUpdateCustomer } from "../store";

import { floristeriaApi } from '../api';





export const useCustomerStore = () => {




    const dispatch = useDispatch();

    const { activeCreateCustomer, activeUpdateCustomer, activeCustomer } = useSelector( state => state.customer );
    

    const setActiveCustomer = ( customerEvent ) => {
        dispatch(onSetActiveCustomer( customerEvent ))
    };

    const startSavingCustomer = async ( customerEvent ) => {

        const { data } = await floristeriaApi.post('/customer', customerEvent);
        console.log(data);
        dispatch(onAddNewCustomer({ ...customerEvent, id: data.customer.id }));
    
    };


    const startActiveIdCustomer = ( customerEvent ) => {
        dispatch(onActiveCustomer( customerEvent ))
    };
    

    const startActiveCreateCustomer = () => {
        dispatch(onActiveCreateCustomer());
    };



    


    const startUpdateCustomer = async ( customerEvent ) => {

        await floristeriaApi.put(`/customer/${activeCustomer.id}`, customerEvent);
        dispatch(onUpdateCustomer({ ...customerEvent, id: activeCustomer.id }));

    };

    

    const startLoadingCustomer = async () => {
        try {
            const { data } = await floristeriaApi.get('/customer');
            dispatch(onLoadCustomer(data.customers));

        } catch (error) {
            console.log(error);
            console.log('Error en cargar los Productos');
        }
    };
    



    const startActiveUpdateCustomer = () => {
        dispatch(onActiveUpdateCustomer());
    };



    const startDeleteCustomer = async ( idCustomer ) => {
        await floristeriaApi.delete(`/customer/${idCustomer}`);
        dispatch(onDeleteCustomer(idCustomer));
    };





    



    return {


        //*Metodos
        setActiveCustomer,
        startSavingCustomer,
        startActiveCreateCustomer,
        startActiveIdCustomer,
        startLoadingCustomer,
        startUpdateCustomer,
        startActiveUpdateCustomer,
        startDeleteCustomer,

    };
};