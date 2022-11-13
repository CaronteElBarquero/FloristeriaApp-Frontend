import { useDispatch, useSelector } from "react-redux";


import { onSetActiveInvoice, onAddNewInvoice, onActiveCreateInvoice, onActiveInvoice, onLoadInvoice, onDeleteInvoice } from "../store";

import { floristeriaApi } from '../api';
import { convertInvoiceToDateInvoice } from "../floristeria/helpers";





export const useInvoiceStore = () => {




    const dispatch = useDispatch();

    

    const setActiveInvoice = ( invoiceEvent ) => {
        dispatch(onSetActiveInvoice( invoiceEvent ))
    };

    const startSavingInvoice = async ( invoiceEvent ) => {

        const { data } = await floristeriaApi.post('/invoice', invoiceEvent);
        // console.log(data);

        //formato de fechas

        // const invoices = convertInvoiceToDateInvoice( data.invoices )
        // console.log(invoices);

        dispatch(onAddNewInvoice({ ...invoiceEvent, id: data.invoice.id }));

    };



    const startActiveIdInvoice = ( invoiceEvent ) => {
        dispatch(onActiveInvoice( invoiceEvent ))
    };
    


    const startActiveCreateInvoice = () => {
        dispatch(onActiveCreateInvoice());
    };


    const startLoadingInvoice = async () => {

        try {
            const { data } = await floristeriaApi.get('/invoice');

            const invoices = convertInvoiceToDateInvoice( data.invoices )
            console.log(invoices);

            dispatch(onLoadInvoice( data.invoices ));

        } catch (error) {
            console.log(error);
        }
    };



    const startDeleteInvoice = async ( id ) => {
        await floristeriaApi.delete(`/invoice/${id}`);
        dispatch(onDeleteInvoice( id ));
    };




    



    return {


        //*Metodos
        setActiveInvoice,
        startActiveIdInvoice,
        startActiveCreateInvoice,
        startSavingInvoice,
        startLoadingInvoice,
        startDeleteInvoice

    };
};