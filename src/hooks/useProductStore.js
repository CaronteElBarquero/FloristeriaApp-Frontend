import { useDispatch, useSelector } from 'react-redux';
import {
    onSetActiveProduct,
    onActiveCreateProduct,
    onActiveProduct,
    onActiveUpdateProduct,
    onAddNewProduct,
    onDeleteProduct,
    onLoadProduct,
    onUpdateProduct,
    setPhotosToProduct,
    getPhotosToProduct,
} from '../store';

import { floristeriaApi } from '../api';
import { useFileUpload } from './useFileUpload';
import { fileUpload } from '../helpers';


export const useProductStore = () => {

    const dispatch = useDispatch();

    const { activeProduct, activeImage } = useSelector(state => state.product);
    // const { fileUpload } = useFileUpload();
    

    const setActiveProduct = (productEvent) => {
        dispatch(onSetActiveProduct(productEvent))
    };

    const startSavingProduct = async (productEvent) => {

        const categoryData = productEvent.category.split(' ');
        const dataFormat = { ...productEvent, category: categoryData[0], image: activeImage };

        const { data } = await floristeriaApi.post('/product', dataFormat);
        console.log(activeImage, ", Esta es la imagen");
        dispatch(onAddNewProduct({ ...productEvent, id: data.product.id, category: { _id: categoryData[0], name: categoryData[1] }, image: activeImage }));
    };

    const startUpdateProduct = async (productEvent) => {
        const categoryData = productEvent.category.split(' ');
        let dataFormat;

        if(activeImage.public_id === ''){
            dataFormat = { ...productEvent, category: categoryData[0] }
            dispatch(onUpdateProduct({ ...productEvent, id: activeProduct.id, category: { _id: categoryData[0], name: categoryData[1] }}));
        }else{
            dataFormat = { ...productEvent, category: categoryData[0], image: activeImage }
            dispatch(onUpdateProduct({ ...productEvent, id: activeProduct.id, category: { _id: categoryData[0], name: categoryData[1] }, image: activeImage }));

        } 
        // if(activeImage.public_id === ''){
        //     dispatch(onUpdateProduct({ ...productEvent, id: activeProduct.id, category: { _id: categoryData[0], name: categoryData[1] }}));
        // }else{
        //     dispatch(onUpdateProduct({ ...productEvent, id: activeProduct.id, category: { _id: categoryData[0], name: categoryData[1] }, image: activeImage }));
        // }

        await floristeriaApi.put(`/product/${activeProduct.id}`, dataFormat);

 };

    const startDeleteProduct = async (idProduct) => {
        await floristeriaApi.delete(`/product/${idProduct}`);
        dispatch(onDeleteProduct(idProduct));
    };

    const startLoadingProduct = async () => {

        try {
            const { data } = await floristeriaApi.get('/product');
            dispatch(onLoadProduct(data.products));

        } catch (error) {
            console.log('Error en cargar los Productos');
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


    const startUploadingFiles = (files = []) => {
        return async (dispatch) => {
            const dataImage = await fileUpload(files[0]);
            dispatch(getPhotosToProduct(dataImage))
            dispatch(setPhotosToProduct(false))

        }
    };

    const startImageUpload = (activeImage) => {
        dispatch(setPhotosToProduct(activeImage))


    }

    const startDataImageUpload = (file) => {
        dispatch(getPhotosToProduct(file))
        
    }



    return {
        //* Propiedades

        //* Metodos
        startSavingProduct,
        startUpdateProduct,
        startDeleteProduct,
        startLoadingProduct,
        startUploadingFiles,
        startActiveCreateProducto,
        startActiveUpdateProduct,
        startIdActiveProduct,
        setActiveProduct,
        startImageUpload,
        startDataImageUpload


    }
}