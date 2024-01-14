import logo from "../../assets/imgs/logo.svg";
import shoppingCart from "../../assets/icons/shopping-cart.svg";
import { AiOutlineBars } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import "./navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setTimeout(() => {
      setMobileMenuOpen(!isMobileMenuOpen);
    }, 100);
  };

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav>
      <div className="container">
        <div className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <div className="navbar__left">
            <NavLink to="/">
              {" "}
              <img src={logo} alt="logo" />
            </NavLink>
            <img src={shoppingCart} alt="shopping cart" />
          </div>
          <div className="navbar__right">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={isNavLinkActive("/") ? "active" : ""}
                >
                  Explore
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={isNavLinkActive("/shop") ? "active" : ""}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={isNavLinkActive("/blog") ? "active" : ""}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            <button>Log in</button>
          </div>

          <div className="mobile__menu">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <IoClose style={{ color: "#fff", fontSize: "27px" }} />
              ) : (
                <AiOutlineBars style={{ color: "#fff", fontSize: "27px" }} />
              )}
            </button>
            {isMobileMenuOpen && (
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={isNavLinkActive("/") ? "active" : ""}
                  >
                    Explore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={isNavLinkActive("/shop") ? "active" : ""}
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={isNavLinkActive("/blog") ? "active" : ""}
                  >
                    Blog
                  </NavLink>
                </li>
                <button>Log in</button>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
