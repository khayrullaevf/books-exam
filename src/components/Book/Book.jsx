import React from "react";

import stars from "../../assets/imgs/stars.png";

import "./book.scss";
const Book = ({ book }) => {
  return (
    <div className="book">
      <img
        src={book?.volumeInfo?.imageLinks?.thumbnail}
        alt={book?.volumeInfo?.authors[0]}
      />
      <div className="book__info">
        <h2>{book?.volumeInfo?.title.slice(0,20)}</h2>
        <h3>{book?.volumeInfo?.authors[0]}</h3>
        <div className="book__info-rating">
          <img src={stars} alt="stars" />
          <h5>8927709 votes</h5>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          dolorum consequatur quae, tempore aspernatur molestias perspiciatis
        </p>
      </div>
    </div>
  );
};

export default Book;
