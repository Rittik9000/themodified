import React, { useState, useCallback } from 'react';
import Slider from 'react-slick';
import { Box, Stack, Typography, useTheme, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RevealText from '../revealText/RevealText';

function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "", zIndex:999, position:'absolute', right:'7px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex:999, position:'absolute', left:'7px'}}
        onClick={onClick}
      />
    );
  }

const slides = [
  {
    imgSrc: '/images/first.jpg',
    heading: 'We Provide Doctors you can Trust!',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, alias.',
  },
  {
    imgSrc: '/images/second.jpg',
    heading: 'Unbelievable Nursing Facility',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, alias.',
  },
  {
    imgSrc: '/images/third.jpg',
    heading: 'Proper Ventilation',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, alias.',
  },
];

const Carousel: React.FC = () => {
  const theme = useTheme();
  const [animate, setAnimate] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    

    
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            backgroundImage: `url(${slide.imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: {xs:'400px',lg:'700px'},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 128, 0, 0.4)', // Bluish background with transparency
              display: 'flex',
              flexDirection: 'column',
              alignItems: {xs:'center', lg:'start'},
              justifyContent: 'center',
              color: theme.palette.common.white,
              textAlign: 'center',
              pl:{xs:1, lg:20},
            }}
          >
            <RevealText width='fit-content'>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{fontSize:{xs:20,lg:40}}}
            >
              {slide.heading}
            </Typography>
            </RevealText>
            <RevealText width='fit-content'>
            <Typography
              variant="body1"
              sx={{fontSize:{xs:12,lg:20}}}
              gutterBottom
            >
              {slide.paragraph}
            </Typography>
            </RevealText>
            <Stack
              direction="row"
              spacing={2}
              
            >
            <RevealText width='fit-content'>
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'lightgray',
                    background: 'white',
                    color: 'black',
                  },
                  fontSize:{xs:12,lg:""}
                }}
              >
                Know More
              </Button>
              </RevealText>
              <RevealText width='fit-content'>
              <Button variant="contained" color="success">
                Get Appointment
              </Button>
              </RevealText>
            </Stack>
          </Box>
        </Box>
      ))}
    </Slider>
    
  );
};

export default Carousel;
