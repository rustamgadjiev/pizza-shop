import { Link } from "react-router-dom";
import logo from "../assets/img/icon/pizza-logo.svg";
import { ReactComponent as CartIcon } from "../assets/img/icon/cart.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>Pizza Shop</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>3</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
