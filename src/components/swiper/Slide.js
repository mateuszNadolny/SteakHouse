import "./../../global_styles/index.css";
import styles from "./Slide.module.scss";

import slideImg from "../../assets/carousel-card-M.png"

const Slide = () => {
    return ( 
        <div className={`${styles["slide-content-wrapper"]} row`}>
            <div className={`${styles["slide-content-wrapper-text"]} col-6-desktop col-12-laptop col-12-mobile`}>
                <div className={styles["slide-content-wrapper-text-container"]}>
                    <h2 className={styles["slide-heading"]}><span className={styles["slide-heading-span"]}>Rabat 10%</span> na pierwsze zamówienie!</h2>
                    <p className={styles["slide-paragraph"]}>Do 20 stycznia złóż zamówienie na stronie i skorzystaj z <b>promocji -10%.</b> Spiesz się. Czas trwania promocji do końca lutego</p>
                    <button className={styles["slide-btn"]}><a href="#">Zamów online</a></button>
                </div>
            </div>
            <div className={`${styles["slider-content-wrapper-img"]} col-6-desktop col-12-laptop col-12-mobile`}>
                <img className={styles["slide-img"]} src={slideImg} alt="juicy steak" />
            </div>
        </div>
    );
}
 
export default Slide;