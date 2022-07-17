import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide }  from 'swiper/react';
import Slide from './Slide';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import "./../../global_styles/index.css";
import styles from './Swiper.module.scss';



export default () => {
    return (
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{  
          delay: 3000,
          disableOnInteraction: false}}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>

      </Swiper>
    );
  };