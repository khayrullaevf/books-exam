// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchData }from "../redux/slice/fetchData"; // Update with the correct path
import Loading from "./Loading/Loading";


const API__KEY = "AIzaSyBvoZyYhC0yBcKFwCHqQN5CVew1cU2qgn8";
// Component
const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data); // Adjust the selector based on your state structure
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);


   const [selectedGenre, setSelectedGenre] = useState("all");
   const genres = ["all", "fiction", "history", "science", "technology"];

useEffect(() => {
  // Dispatch the fetchData action to initiate the API request
  dispatch(
    fetchData(
      `https://www.googleapis.com/books/v1/volumes?q=business+inauthor:keyes${
        selectedGenre !== "all" ? `&subject=${selectedGenre}` : ""
      }&key=${API__KEY}`
    )
  );
}, [dispatch, selectedGenre]);

const handleGenreChange = (genre) => {
  setSelectedGenre(genre);
};
  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <p>Error occurred</p>;
  }


  // Render your component using the fetched data
  console.log(data?.items);
  return (
    <div>
      <h1>Data from Redux:</h1>
      <div>
        <h2>Filter by Genre:</h2>
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
      <ul>
        {data?.items.map((book, index) => (
          <li key={index}>
            <h2>{book?.volumeInfo?.authors[0]}</h2>
            <h3>{book?.volumeInfo?.categories}</h3>
            <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
