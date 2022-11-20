import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AutoFixHigh, Delete, DeleteForever } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { useCategoryStore, useUiStore } from '../../../hooks';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { motion } from "framer-motion";
import { variantsCard } from '../../../animation/framerValues';


export const CardCategory = () => {

    const { categories, activeCreateCategory } = useSelector(state => state.category)
    const { startLoadingCategory, startActiveUpdateCategory, startIdActiveCategory, startDeleteCategory } = useCategoryStore();
    const { openDateModal } = useUiStore();
    const MotionCard = motion(Card);


    //LLAMAR LAS CATEGORIAS DEL BACKEND
    useEffect(() => {
        startLoadingCategory()
    }, [])

    useEffect(() => {
        // console.log(categories)
    }, [categories])



    //IMAGEN ALEATORIA
    const randomImage = () => {
        const images = [
            'http://localhost:3000/src/assets/categories/0.jpg',
            'http://localhost:3000/src/assets/categories/1.jpg',
            'http://localhost:3000/src/assets/categories/2.jpg',
            'http://localhost:3000/src/assets/categories/3.jpg',
            'http://localhost:3000/src/assets/categories/4.jpg',
            'http://localhost:3000/src/assets/categories/5.jpg',
        ]
        return images[Math.floor(Math.random() * images.length)]
    }


    const onUpdate = (category) => {
        startActiveUpdateCategory();
        startIdActiveCategory(category);
        openDateModal();
    }


    const onDelete = (category) => {
        // console.log(category);

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
        })
        swalWithBootstrapButtons.fire({
            title: '¿Está seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, bórralo!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Borrado!',
                    'Su archivo ha sido eliminado.',
                    'success'
                )

                startDeleteCategory(category);

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Tú archivo está a salvo :)',
                    'error'
                )
            }
        })

    }



    return (

        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} >

            {
                categories[0]?.name !== 'Sin categoría' && (
                    categories.slice(0).reverse().map(category => (
                        <MotionCard
                            whileHover="hover"
                            initial="hidden"
                            animate="visible"
                            variants={variantsCard} sx={{ maxWidth: 320, mt: 9, ml: 4, borderRadius: '15px' }} key={category.id} >
                            <CardMedia
                                component="img"
                                height="135"
                                image={randomImage()}
                                alt="imagen categoria"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" noWrap component="div" sx={{ maxWidth: 200 }} >
                                    <strong> {category.name} </strong>
                                </Typography>
                                <Typography variant="body2" noWrap color="text.secondary" sx={{ maxWidth: 175 }}>
                                    {category.description ? category.description : category.name}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ ml: 1 }}>

                                <IconButton size="small" sx={{ color: 'secondary.main' }} onClick={() => onUpdate(category)} >
                                    <AutoFixHigh />
                                </IconButton>

                                <IconButton size="small" sx={{ color: 'secondary.main' }} onClick={() => onDelete(category.id)}>
                                    <DeleteForever />
                                </IconButton>

                            </CardActions>
                        </MotionCard>
                    ))
                )
            }
        </Box>
    );
}
