import React from "react";
import stars from "../../assets/imgs/stars.png";

import "./popularbooks.scss";
import { Link } from "react-router-dom";

const PopularBooks = ({ book }) => {
  return (
    <Link to={`/about/${book?.id}`} style={{ textDecoration: "none" }}>
      <div className="popular-card">
        <img
          className="popular-card__img"
          src={book?.volumeInfo?.imageLinks?.thumbnail}
          alt={book?.volumeInfo?.authors[0]}
        />
        <div className="book__info">
          <h2 style={{ fontSize: "20px" }}>
            {book?.volumeInfo?.title.slice(0, 20)}
          </h2>
          <h3 style={{ fontSize: "16px" }}>{book?.volumeInfo?.authors[0]}</h3>
          <div className="book__info-rating">
            <img style={{ marginLeft: "1rem" }} src={stars} alt="stars" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularBooks;
