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
        <header className={`col-12-mobile col-12-desktop`}>
            <nav ref={navbarRef} className="row col-12-mobile col-12-desktop">
            {/* <button onClick={toggleNavbarHandler}>
                <img src={closeIcon} alt="close-icon"/>
            </button> */}
                <div className={`${styles["logo-wrapper"]} row col-2-desktop`}>
                    <img src={restaurantLogo} alt="logo" className={styles["logo"]}/>
                </div>
                <ul className={`${styles["ul-left"]} row col-7-desktop`}>
                    <li className={styles["clickable"]}><a href="#">Steaks</a></li>
                    <li className={styles["clickable"]}><a href="#">Burgers</a></li>
                    <li className={styles["clickable"]}><a href="#">French Fries</a></li>
                    <li className={styles["clickable"]}><a href="#">Drinks</a></li>
                    <li className={styles["clickable"]}><a href="#">Gdzie dowozimy</a></li>
                    <li className={styles["clickable"]}><a href="#">Kontakt</a></li>
                </ul>
                <ul className={`${styles["ul-right"]} row col-3-desktop`}>
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
                {/* <button onClick={toggleNavbarHandler}>
                    <img src={menuIcon} alt="menu icon"/>
                </button> */}
                </nav>
        </header>
    );
}
 
export default Navbar;