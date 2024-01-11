import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/fetchData"; // Update with the correct path
import Loading from "../Loading/Loading";
import "./bookshelf.scss";
import Book from "../Book/Book";

const API__KEY = "AIzaSyBvoZyYhC0yBcKFwCHqQN5CVew1cU2qgn8";

const BookShelf = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data); // Adjust the selector based on your state structure
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  const [selectedGenre, setSelectedGenre] = useState("all");
  const genres = [
    "all",
    "business",
    "science",
    "fiction",
    "philosophy",
    "biography",
  ];
  useEffect(() => {
    dispatch(
      fetchData(
        `https://www.googleapis.com/books/v1/volumes?q=${
          selectedGenre !== "all" ? selectedGenre : ""
        }+inauthor:keyes&key=${API__KEY}`
      )
    );
  }, [dispatch, selectedGenre]);
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error occurred</p>;
  }

  return (
    <div className="bookshelf">
      <div className="genres">
        <h2>Book by Genre</h2>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>
              <button
                onClick={() => handleGenreChange(genre)}
                className={selectedGenre === genre ? "active" : ""}
              >
                {genre}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="books">
        <h2>Recommended</h2>
        <div className="books__cards">
          {data?.items.slice(0, 4).map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
