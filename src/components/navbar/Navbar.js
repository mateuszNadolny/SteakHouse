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
        <header className={`${styles["header"]} container row justify-space-between`}>
            <img src={restaurantLogo} alt="logo" className={styles["logo-icon"]}/>
            <nav ref={navbarRef} className={`${styles["nav"]} row justify-center`}>
                <div className={`${styles["navbar-elements"]} justify-center row`}>
                    <div className={styles["navbar-left-elements"]}>
                        <button onClick={toggleNavbarHandler}>
                            <img src={closeIcon} alt="close-icon" className={`${styles["menu-close-icon"]} ${styles["clickable-btn"]}`}/>
                        </button>
                        <ul>
                            <li className={styles["clickable"]}>Steaks</li>
                            <li className={styles["clickable"]}>Burgers</li>
                            <li className={styles["clickable"]}>French Fries</li>
                            <li className={styles["clickable"]}>Drinks</li>
                            <li className={styles["clickable"]}>Gdzie dowozimy?</li>
                            <li className={styles["clickable"]}>Kontakt</li>
                        </ul>
                    </div>
                    <div className={`${styles["navbar-right-elements"]} row justify-space-around`}>
                        <div className={`${styles["account-wrapper"]} ${styles["clickable"]}`}>
                            <img src={accountIcon} alt="account-icon"/>
                            <p>Moje konto</p>
                        </div> 
                        <div className={`${styles["cart-wrapper"]} ${styles["clickable"]}`}>
                            <img src={cartIcon} alt="cart-icon"/>
                            <p>Koszyk</p>
                        </div> 
                        <div className={`${styles["order-wrapper"]} ${styles["clickable"]}`}>
                            <img src={orderIcon} alt="order-icon"/>
                            <p>Zamów</p>
                        </div> 
                    </div>
                </div>
            </nav>
            <button className={`${styles["nav-btn-open"]} ${styles["clickable-btn"]}`} onClick={toggleNavbarHandler}>
                <img src={menuIcon} alt="menu icon" className={styles["menu-hamburger-icon"]}/>
            </button>
        </header>
    );
}
 
export default Navbar;