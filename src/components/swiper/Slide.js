import "./../../global_styles/index.css";
import styles from "./Slide.module.scss";

const Slide = () => {
    return ( 
        <div className={styles["slide-content-wrapper"]}>
            <div className={styles["slide-content-wrapper-child"]}>
                <h2 className={styles["slide-heading"]}><span className={styles["slide-heading-span"]}>Rabat 10%</span> na pierwsze zamówienie!</h2>
                <p className={styles["slide-paragraph"]}>Do 20 stycznia złóż zamówienie na stronie i skorzystaj z <b>promocji -10%.</b> Spiesz się. Czas trwania promocji do końca lutego</p>
                <button className={styles["slide-btn"]}><a href="#">Zamów online</a></button>
            </div>
        </div>
    );
}
 
export default Slide;