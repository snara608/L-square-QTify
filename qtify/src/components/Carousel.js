import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import "./Carousel.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

export default function Carousel({ data, renderComponent }) {
  return (
    <div className="carousel-wrapper">
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"} 
        spaceBetween={40} // Matches Figma gap: 40px
        allowTouchMove
      >
   
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
  
       

        {data.map((item) => (
          <SwiperSlide key={item.id} style={{ width: 'auto' }}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}