import { useDispatch, useSelector } from "react-redux";

import { floristeriaApi } from '../api';
import {  errorClear, onAddNewSubs, onNotCreateSubs } from "../store";



export const useSubsStore = () => {



    const dispatch = useDispatch();
    const subs = useSelector((state) => state.subs.subscriptions);
    

    const startSavingSubs = async (subsEvent) => {

        try {

            const { data } = await floristeriaApi.post('/subscriber', subsEvent);
            console.log(data);
            dispatch(onAddNewSubs({ ...subsEvent, id: data.id }));

        } catch (error) {
            console.log(error);
            dispatch(onNotCreateSubs(error.response.data?.msg || 'gmail regitrado'));
            
            setTimeout(() => {
                dispatch(errorClear())
            }, 10);
        }

    };

    
    return { 

        subs, 
        startSavingSubs 
    };

};