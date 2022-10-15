import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCategoryStore, useUiStore } from '../../../hooks';
// import Button from '@mui/material/Button';

export const CardCategory = () => {

    const { categories, activeCreateCategory } = useSelector(state => state.category)
    const { startLoadingCategory, startActiveUpdateCategory, startIdActiveCategory } = useCategoryStore();
    const { openDateModal } = useUiStore();


    // console.log( categories )

    //LLAMAR LAS CATEGORIAS DEL BACKEND
    useEffect(() => {
        startLoadingCategory()
    }, [])

    console.log('Cargando categorias', activeCreateCategory);


    const onUpdate = (idCategory) => {

        console.log('Hola estoy en Edit');
        startActiveUpdateCategory();
        startIdActiveCategory(idCategory);

        console.log("este es el id", idCategory);
        openDateModal();
    }

    // const handleClicDelete = () => {
    //     startDeleteCategory();
    // }



    return (

        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} >

            {
                categories.map(category => (
                    <Card sx={{ maxWidth: 320, mt: 10, ml: 2.5, borderRadius: '15px' }} key={category.id} >
                        <CardMedia
                            component="img"
                            height="135"
                            image="http://localhost:3000/src/assets/6.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {category.name}
                            </Typography>
                            <Typography variant="body2" noWrap color="text.secondary">
                                {category.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => onUpdate(category.id)} >Editar</Button>
                            <Button size="small" >Eliminar</Button>
                        </CardActions>
                    </Card>
                ))
            }

        </Box>

    );
}
