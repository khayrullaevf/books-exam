import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/fetchData"; // Update with the correct path
import Loading from "../Loading/Loading";
import "./shopping.scss";
import ShoppingBook from "../ShoppingBook/ShoppingBook";

const API__KEY = "AIzaSyBvoZyYhC0yBcKFwCHqQN5CVew1cU2qgn8";
const Shopping = () => {
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
    <div className="shopping">
      <div className="shopping__filters">
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
      </div>
      <div className="shopping__books">
        {Array.isArray(data?.items) &&
          data.items
            .slice(0, 4)
            .map((book, index) => <ShoppingBook key={index} book={book} />)}
      </div>
    </div>
  );
};

export default Shopping;
