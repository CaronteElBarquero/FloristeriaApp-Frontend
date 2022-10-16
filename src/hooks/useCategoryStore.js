import { useDispatch, useSelector } from 'react-redux';
import {
    onAddNewCategory,
    onDeleteCategory,
    onLoadCategory,
    onSetActiveCategory,
    onUpdateCategory,
    onActiveCreateCategory,
    onActiveUpdateCategory,
    onActiveCategory
} from '../store';

import { floristeriaApi } from '../api';


export const useCategoryStore = () => {

    const dispatch = useDispatch();

    const { categories, activeCategory, activeCategoryUpdate } = useSelector(state => state.category);

    const setActiveCategory = (categoryEvent) => {
        dispatch(onSetActiveCategory(categoryEvent))
    };

    const startSavingCategory = async (categoryEvent) => {

        // CREANDO
        const { data } = await floristeriaApi.post('/category', categoryEvent);
        console.log({ data })

        dispatch(onAddNewCategory({ ...categoryEvent, id: data.category.id }))
    };

    const startUpdateCategory = async (categoryEvent) => {
        //ACTUALIZANDO
        await floristeriaApi.put(`/category/${activeCategoryUpdate.id}`, categoryEvent);
        dispatch(onUpdateCategory({ ...categoryEvent, id: activeCategoryUpdate.id }));
    };

    const startDeleteCategory = async (idCategory) => {
        await floristeriaApi.delete(`/category/${idCategory}`);
        dispatch(onDeleteCategory(idCategory));
    };

    const startLoadingCategory = async () => {

        try {
            const { data } = await floristeriaApi.get('/category');
            dispatch(onLoadCategory(data.categories));

        } catch (error) {
            console.log('Error en cargar las categorias');
            console.log(error);
        }
    };

    const startActiveCreateCategory = () => {
        dispatch(onActiveCreateCategory());
    };

    const startActiveUpdateCategory = () => {
        dispatch(onActiveUpdateCategory())
    };

    const startIdActiveCategory = (category) => {
        dispatch(onActiveCategory(category))
    };


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