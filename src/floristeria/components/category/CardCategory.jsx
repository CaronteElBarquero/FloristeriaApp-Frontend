import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AutoFixHigh, Delete, DeleteForever } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCategoryStore, useUiStore } from '../../../hooks';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { styled, alpha } from '@mui/material/styles';

import { motion } from "framer-motion";
import { variantsCard } from '../../../animation/framerValues';
import { SearchInput } from '../SearchInput';

export const CardCategory = () => {

    const { categories, activeCreateCategory } = useSelector(state => state.category)
    const { startLoadingCategory, startActiveUpdateCategory, startIdActiveCategory, startDeleteCategory } = useCategoryStore();
    const { openDateModal } = useUiStore();
    const MotionCard = motion(Card);

    const [categoryData, setCategoryData] = useState(categories);
    const [inputSearch, setInputSearch] = useState("")






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
            'https://res.cloudinary.com/dwozn2lvh/image/upload/v1668917850/5_aj4sfv.jpg',
            'https://res.cloudinary.com/dwozn2lvh/image/upload/v1668917849/4_nd1m9e.jpg',
            'https://res.cloudinary.com/dwozn2lvh/image/upload/v1668917849/3_kwsqss.jpg',
            'https://res.cloudinary.com/dwozn2lvh/image/upload/v1668917848/2_pjh9mv.jpg',
            'https://res.cloudinary.com/dwozn2lvh/image/upload/v1668917847/1_lltwry.jpg',
            'https://res.cloudinary.com/dwozn2lvh/image/upload/v1668917847/0_axvnqi.jpg',
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

    // //busca por nombre

    // const handleSearch = (e) => {
    //     setInputSearch(e.target.value)
    //     console.log(inputSearch)
    // }

    useEffect(() => {
        if (inputSearch.length === 0) return setCategoryData(categories);

        setCategoryData(
            categoryData.filter(category =>
                category.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()),
            ),
        );
    }, [inputSearch]);


    return (


        <>
            <br />
            <br />

            <SearchInput onChange={setInputSearch} />



            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}  >

                {
                    categoryData[0]?.name !== 'Sin categoría' && (
                        categoryData.slice(0).reverse().map(category => (
                            <MotionCard
                                whileHover="hover"
                                initial="hidden"
                                animate="visible"
                                variants={variantsCard} sx={{ maxWidth: 320, mt: 3, ml: 4, borderRadius: '15px' }} key={category.id} >
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


        </>

    );
}
