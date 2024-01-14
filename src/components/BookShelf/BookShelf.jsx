import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/fetchData";
import Loading from "../Loading/Loading";
import "./bookshelf.scss";
import Book from "../Book/Book";
import PopularBooks from "../PopularBooks/PopularBooks";
import NewStory from "../NewStory/NewStory";
const API__KEY = "AIzaSyBvoZyYhC0yBcKFwCHqQN5CVew1cU2qgn8";

const BookShelf = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
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

  console.log(data?.items);
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
        <h2 className="genres__recomendations">Recomendations</h2>
        <ul>
          <li>
            <button>Artist of the Month</button>
          </li>
          <li>
            <button>Book of the Year</button>
          </li>
          <li>
            <button>Top Genre</button>
          </li>
          <li>
            <button>Trending</button>
          </li>
        </ul>
      </div>
      <div className="books__wrapper">
        <div className="books">
          <h2>Recommended</h2>
          <div className="books__cards">
            {Array.isArray(data?.items) &&
              data.items
                .slice(0, 4)
                .map((book, index) => <Book key={index} book={book} />)}
          </div>
          <h2 className="popular">Popular</h2>
          <div className="popular__books">
            {Array.isArray(data?.items) &&
              data.items
                .slice(3, 7)
                .map((book, index) => <PopularBooks key={index} book={book} />)}
          </div>
        </div>
        <div className="books__second">
          <h2>This new story</h2>
          <div className="books__second-cards">
            {Array.isArray(data?.items) &&
              data.items
                .slice(6, 10)
                .map((book, index) => <NewStory key={index} book={book} />)}
          </div>
          <h2 style={{ textAlign: "start", marginTop: "130px" }}>
            Which They like
          </h2>
          <div className="books__cards">
            {Array.isArray(data?.items) &&
              data.items
                .slice(0, 4)
                .map((book, index) => <Book key={index} book={book} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
