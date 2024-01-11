import React from "react";

import './book.scss'
const Book = ({ book }) => {
  return (
    <div className="book">
      <img
        src={book?.volumeInfo?.imageLinks?.thumbnail}
        alt={book?.volumeInfo?.authors[0]}
      />
      <div className="book__info">
        <h2>{book?.volumeInfo?.authors[0]}</h2>
        <h3>{book?.volumeInfo?.categories}</h3>
      </div>
    </div>
  );
};

export default Book;
