
import { Box, ImageList, Card, ImageListItem, ImageListItemBar,   } from '@mui/material';
import { itemData } from '../data/data';

import { motion } from "framer-motion";
import { variantsCard } from '../../animation/framerValues';



export const  ShowCategories = () => {


    const MotionCard = motion(ImageList );

    return (
        <Box sx={{ maxWidth: '100%', height: '450'  }} xs='auto' >
            <ImageList variant="masonry" cols={3} gap={6}>
                {itemData.map((item) => (

                    
                    <ImageListItem key={item.img} >
                        <img 
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                            
                        <ImageListItemBar 
                            position="below" 
                        />

                    </ImageListItem>

                ))}
            </ImageList>
        </Box>
    );
}
