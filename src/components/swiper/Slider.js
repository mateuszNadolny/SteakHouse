import Swiper from "./Swiper";

import "./../../global_styles/index.css";
import styles from './Slider.module.scss';

import carouselCard from "../../assets/carousel-card-D.png";

const Slider = () => {
    return ( 
        <div className={styles["slider-wrapper"]}>
            <div className={` ${styles["swiper-wrapper"]} col-6-desktop`}><Swiper /></div>
            <div className={`col-6-desktop`}>
                <img className={`${styles["slider-image"]}`} src={carouselCard} alt="Steak image" />
            </div>
        </div>
        
    );
}
 
export default Slider;
