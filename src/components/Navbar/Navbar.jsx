import logo from "../../assets/imgs/logo.svg";
import shoppingCart from "../../assets/icons/shopping-cart.svg";

import "./navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="navbar__left">
            <a href="/">
              {" "}
              <img src={logo} alt="logo" />
            </a>
            <img src={shoppingCart} alt="shopping cart" />
          </div>
          <div className="navbar__right">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">
                  Explore
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" activeClassName="active">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="active">
                  Blog
                </NavLink>
              </li>
            </ul>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
