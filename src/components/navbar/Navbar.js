// importing styles
import "./../../global_styles/index.css";
import styles from "./Navbar.module.scss";


// importing assets
import restaurantLogo from "../../assets/logo-mobile.png";
import accountIcon from "../../assets/myaccount.svg"
import cartIcon from "../../assets/cart.svg"
import orderIcon from "../../assets/order.svg"
import menuIcon from "../../assets/menu.svg"
import closeIcon from "../../assets/close.svg"
import { useRef } from "react";

const Navbar = () => {

    const navbarRef = useRef()
    const toggleNavbarHandler = () => {
        navbarRef.current.classList.toggle(styles["nav-toggle"])
    }

    return ( 
        <header className={`row col-12-mobile col-12-desktop col-12-laptop`}>
            <div className={`${styles["logo-wrapper"]} row col-1-desktop col-1-laptop col-1-mobile`}>
                <img src={restaurantLogo} alt="logo" className={styles["logo"]}/>
            </div>
            <nav ref={navbarRef} className="row col-12-mobile col-11-desktop col-11-laptop">
            <button onClick={toggleNavbarHandler} className={styles["close-icon"]}>
                <img src={closeIcon} alt="close-icon"/>
            </button>
                <ul className={`${styles["ul-left"]} row col-8-desktop col-12-mobile`}>
                    <li className={styles["clickable"]}><a href="#">Steaks</a></li>
                    <li className={styles["clickable"]}><a href="#">Burgers</a></li>
                    <li className={styles["clickable"]}><a href="#">French Fries</a></li>
                    <li className={styles["clickable"]}><a href="#">Drinks</a></li>
                    <li className={styles["clickable"]}><a href="#">Gdzie dowozimy?</a></li>
                    <li className={styles["clickable"]}><a href="#">Kontakt</a></li>
                </ul>
                <ul className={`${styles["ul-right"]} row col-4-desktop col-12-mobile`}>
                        <li className={styles["clickable"]}>
                            <div className={`${styles["ul-right-el-wrapper"]} row`}>
                                <img src={accountIcon} alt="account icon" />
                                <a href="#">Moje konto</a>
                            </div>
                        </li>
                        <li className={styles["clickable"]}>
                            <div className={`${styles["ul-right-el-wrapper"]} row`}>
                                <img src={cartIcon} alt="cart icon" />
                                <a href="#">Koszyk</a>
                            </div>
                        </li>
                        <li className={styles["clickable"]}>
                            <div className={`${styles["ul-right-el-wrapper"]} ${styles["ul-right-el-wrapper-order"]} row`}>
                                <img src={orderIcon} alt="order icon" />
                                <a href="#">Zamów</a>
                            </div>
                        </li>
                </ul>
            </nav>
            <button onClick={toggleNavbarHandler} className={styles["menu-hamburger-icon"]}>
                <img src={menuIcon} alt="menu icon"/>
            </button>
        </header>
    );
}
 
export default Navbar;