import { useDispatch, useSelector } from 'react-redux';
import {onSetActiveProduct, onActiveCreateProduct, onActiveProduct, onActiveUpdateProduct, onAddNewProduct, onDeleteProduct, onLoadProduct, onUpdateProduct } from '../store';

import { floristeriaApi } from '../api';


export const useProductStore = () => {

    const dispatch = useDispatch();

    const { activeProduct } = useSelector(state => state.product);

    const setActiveProduct = (productEvent) => {
        dispatch(onSetActiveProduct(productEvent))
    };

    const startSavingProduct = async (productEvent) => {
        const { data } = await floristeriaApi.post('/product', productEvent);
        console.log({ data })
        dispatch(onAddNewProduct({ ...productEvent, id: data.product.id }))
    };

    const startUpdateProduct = async (productEvent) => {
        await floristeriaApi.put(`/product/${activeProduct.id}`, productEvent);
        dispatch(onUpdateProduct({ ...productEvent, id: activeProduct.id }));
    };

    const startDeleteProduct = async (idProduct) => {
        console.log(idProduct);
        await floristeriaApi.delete(`/product/${idProduct}`);
        dispatch(onDeleteProduct(idProduct));
    };

    const startLoadingProduct = async () => {

        try {
            const { data } = await floristeriaApi.get('/product');
            dispatch(onLoadProduct(data.products));

        } catch (error) {
            console.log('Error en cargar las categorias');
            console.log(error);
        }
    };

    const startActiveCreateProducto = () => {
        dispatch(onActiveCreateProduct());
    };

    const startActiveUpdateProduct = () => {
        dispatch(onActiveUpdateProduct())
    };

    const startIdActiveProduct = (product) => {
        dispatch(onActiveProduct(product))
    };


    return {
        //* Propiedades
		
        //* Metodos
		startSavingProduct,
		startUpdateProduct,
		startDeleteProduct,
		startLoadingProduct,
		startActiveCreateProducto,
		startActiveUpdateProduct,
		startIdActiveProduct,
        setActiveProduct
      

    }
}