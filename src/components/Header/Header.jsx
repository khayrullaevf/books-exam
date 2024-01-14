import React from "react";
import "./header.scss";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({ title, bg, subtitle }) => {
  return (
    <div className="header" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className="container">
        <div className="hero">
          <h1 className="hero__title">{title}</h1>
          <h3 className="hero__subtitle">{subtitle}</h3>
          <SearchForm/>
        </div>
      </div>
    </div>
  );
};

export default Header;
