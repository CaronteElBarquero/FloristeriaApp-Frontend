import { useDispatch, useSelector } from 'react-redux';
import {
    onAddNewCategory,
    onDeleteCategory,
    onLoadCategory,
    onSetActiveCategory,
    onUpdateCategory,
    onActiveCreateCategory,
    onActiveUpdateCategory,
    onIdActiveCategory
} from '../store';

import { floristeriaApi } from '../api';


export const useCategoryStore = () => {

    const dispatch = useDispatch();

    const { categories, activeCategory, activeIdCategory } = useSelector(state => state.category);


    const setActiveCategory = (categoryEvent) => {
        dispatch(onSetActiveCategory(categoryEvent))
    };


    const startSavingCategory = async (categoryEvent) => {


        // if (categoryEvent.id) {
        //     //ACTUALIZANDO
        //     const { data } = await floristeriaApi.put(`/category/${categoryEvent.id}`, categoryEvent);
        //     dispatch(onUpdateCategory({ ...categoryEvent }));

        // } else {
        //     // CREANDO
        const { data } = await floristeriaApi.post('/category', categoryEvent);
        console.log({ data })

        dispatch(onAddNewCategory({ ...categoryEvent, id: data.category.id }))
        // }
    }

    const startUpdateCategory = async (categoryEvent) => {
        console.log(categoryEvent);
        console.log(activeIdCategory);
        await floristeriaApi.put(`/category/${activeIdCategory}`, categoryEvent);
        dispatch(onUpdateCategory({ ...categoryEvent, id: activeIdCategory }));
    }


    const startDeleteCategory = () => {

        dispatch(onDeleteCategory());
    }



    const startLoadingCategory = async () => {

        try {

            const { data } = await floristeriaApi.get('/category');
            dispatch(onLoadCategory(data.categories));
            // console.log({ data });

        } catch (error) {
            console.log('Error en cargar las categorias');
            console.log(error);

        }
    }

    const startActiveCreateCategory = () => {
        dispatch(onActiveCreateCategory());
    }

    const startActiveUpdateCategory = () => {
        dispatch(onActiveUpdateCategory())
    }


    const startIdActiveCategory = (id) => {
        dispatch(onIdActiveCategory(id))
    }





    return {

        //* Propiedades
        activeCategory,
        categories,

        //* Metodos
        setActiveCategory,
        startSavingCategory,
        startDeleteCategory,
        startLoadingCategory,
        startActiveCreateCategory,
        startActiveUpdateCategory,
        startUpdateCategory,
        startIdActiveCategory

    }
}