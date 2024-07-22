import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import './Carousel.css'

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img key={imageItemLink} src={imageItemLink} alt="" />;
        })}
      </Carousel>
      <div className='hero_img'></div>
    </div>
  );
}

export default CarouselEffect;

