import React from "react";

import stars from "../../assets/imgs/stars.png";
import defaultCardImage from "../../assets/imgs/no-image.png";


import "./book.scss";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  return (
    <Link to={`/about/${book?.id}`} style={{ textDecoration: "none" }}>
      <div className="book">
        <img
          src={book?.volumeInfo?.imageLinks?.thumbnail || defaultCardImage}
          alt={book?.volumeInfo?.authors[0]}
        />
        <div className="book__info">
          <h2 style={{ textAlign: "start" }}>
            {book?.volumeInfo?.title.slice(0, 20)}
          </h2>
          <h3>{book?.volumeInfo?.authors[0]}</h3>
          <div className="book__info-rating">
            <img src={stars} alt="stars" />
            <h5>8927709 votes</h5>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            dolorum consequatur quae, tempore 
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
