// importing styles
import "./../../global_styles/index.css";
import "./Navbar.module.scss";

// importing assets
import restaurantLogo from "../../assets/logo-mobile.png";
import accountIcon from "../../assets/myaccount.svg"
import cartIcon from "../../assets/cart.svg"
import orderIcon from "../../assets/order.svg"
import menuIcon from "../../assets/menu.svg"
import closeIcon from "../../assets/close.svg"

const Navbar = () => {
    return ( 
        <header>
            <nav>
                <div className="navbar-left-elements">
                    <img src={menuIcon} alt="menu icon" className="menu-hamburger-icon"/>
                    <img src={closeIcon} alt="close icon" className="menu-close-icon"/>
                    <div className="logo-icon-wrapper"></div>
                    <img src={restaurantLogo} alt="logo" className="logo-icon"/>
                    <ul className="menu-items">
                        <li className="menu-items-el">Steaks</li>
                        <li className="menu-items-el">Burgers</li>
                        <li className="menu-items-el">French Fries</li>
                        <li className="menu-items-el">Drinks</li>
                    </ul>
                    <ul className="info-items">
                        <li className="info-items-el">Gdzie dowozimy?</li>
                        <li className="info-items-el">Kontakt</li>
                    </ul>
                </div>
                <div className="navbar-right-elements">
                    <div className="my-acount-wrapper">
                        <img src={accountIcon} alt="account-icon" className="my-account-icon"/>
                        <p className="my-account-paragraph">Moje konto</p>
                    </div> 
                    <div className="cart-wrapper">
                        <img src={cartIcon} alt="cart-icon" className="cart-icon"/>
                        <p className="cart-paragraph">Koszyk</p>
                    </div> 
                    <div className="order-wrapper">
                        <img src={orderIcon} alt="order-icon" className="order-icon"/>
                        <p className="order-paragraph">Zamów</p>
                    </div> 
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;