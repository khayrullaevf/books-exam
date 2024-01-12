import React from "react";

import defaultCardImage from "../../assets/imgs/no-image.png";
import stars from "../../assets/imgs/stars.png";
import "./shoppingbook.scss";
const ShoppingBook = ({ book }) => {
  return (
    <div className="shoppingBook" style={{height:'338px', alignItems:'center'}}>
      <img
        src={book?.volumeInfo?.imageLinks?.thumbnail || defaultCardImage}
        alt={book?.volumeInfo?.authors[0]}
        style={{height:'225px'}}
      />
      <div className="shoppingBook__info">
        <h2 style={{ textAlign: "start" }}>
          {book?.volumeInfo?.title.slice(0, 20)}
        </h2>
        <h3>{book?.volumeInfo?.authors[0]}</h3>
        <div className="shoppingBook__info-rating">
          <img src={stars} alt="stars" />
          <h5>8927709 votes</h5>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          dolorum consequatur quae, tempore
        </p>
          <button>Buy now</button>
      </div>
    </div>
  );
};

export default ShoppingBook;
