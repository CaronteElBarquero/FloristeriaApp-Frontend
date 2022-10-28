import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { Card } from '@mui/material';

import { motion } from "framer-motion";
import { variantsCard } from '../../animation/framerValues';


import { dataDigitalBestSeller } from '../data/data';


export const ListInventory = () => {

  const [defaultImage, setDefaultImage] = useState({});

  const MotionCard = motion(Card);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      
    }));
  };

  return (
    <div className="App">
      <Slider {...settings}>

        {dataDigitalBestSeller.map((item) => (
          <MotionCard
           whileHover="hover"
           initial="hidden"
           animate="visible"
           variants={variantsCard} sx={{  borderRadius: '15px' }} key={item.id} 
          >
            <div className="card" >
              <div className="card-top">
                <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <h1><strong>{item.title}</strong></h1>
              </div>
              <div className="card-bottom">
                <h3>{item.price}</h3>
                <span className="category">{item.category}</span>
              </div>
            </div>
          </MotionCard>

        ))}
      </Slider>
    </div>
  );
}

