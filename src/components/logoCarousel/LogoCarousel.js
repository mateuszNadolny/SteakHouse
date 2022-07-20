import "./../../global_styles/index.css";
import styles from "./LogoCarousel.module.scss";


// importing assets
const pysznePl = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/pysznepl.png";
const deliGoo = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/deligoo.png";
const glovo = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/glovo.png";
const uberEats = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/ubereats.png";
const boltFood = "https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/boltfood.png";


const LogoCarousel = () => {


    return ( 
            <img className={styles["logo-image"]} src="https://github.com/mateuszNadolny/SteakHouse/blob/25226a124d18ab2865c008a4bd87b134f2309703/src/assets/pysznepl.png" alt="pyszne.pl logo" />
        
     );
}
 
export default LogoCarousel;