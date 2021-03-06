import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide }  from 'swiper/react';
import Slide from './Slide';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import styles from './Swiper.module.scss';

const SimpleSwiper = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    style: {
      zIndex: 0,
    },
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {   
      el: `.${styles["custom-pagination-div"]}`,
      clickable: true,
      renderBullet: (index, className) => {
      return '<span class="' + className + '"></span>';
      }, },
  };

  return (
    <Swiper {...params}>
      <SwiperSlide><Slide/></SwiperSlide>
      <SwiperSlide><Slide/></SwiperSlide>
      <SwiperSlide><Slide/></SwiperSlide>
      <div className={styles["custom-pagination-div"]}></div>

    </Swiper>
  );

}

export default SimpleSwiper;