import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide }  from 'swiper/react';


import "./../../global_styles/index.css";
import styles from "./LogoCarousel.module.scss";
import 'swiper/scss';


// importing assets
const pysznePl = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/pysznepl.png";
const deliGoo = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/deligoo.png";
const glovo = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/glovo.png";
const uberEats = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/ubereats.png";
const boltFood = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/boltfood.png";


const LogoCarousel = () => {
    const params = {
        effect: "slide",
        // loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
        // modules: [Autoplay],
        style: {
            zIndex: 3,
        },
    }

    return ( 
        <Swiper {...params}>  
        </Swiper>
        
     );
}
 
export default LogoCarousel;