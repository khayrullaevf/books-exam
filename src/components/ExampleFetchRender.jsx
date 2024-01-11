// Import necessary dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchData }from "../redux/slice/fetchData"; // Update with the correct path

// Component
const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data); // Adjust the selector based on your state structure
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    // Dispatch the fetchData action to initiate the API request
    dispatch(
      fetchData(
        `https://www.googleapis.com/books/v1/volumes?q=business+inauthor:keyes&key=AIzaSyBvoZyYhC0yBcKFwCHqQN5CVew1cU2qgn8`
      )
    ); // Update with the correct API endpoint
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred</p>;
  }

  // Render your component using the fetched data
  console.log(data.items);
  return (
    <div>
      <h1>Data from Redux:</h1>
      <ul>
        {
          data?.items.map((book,index)=>{
            return (
              <li key={index}>
                <h2>{book?.volumeInfo?.authors[0]}</h2>
                <h3>{book?.volumeInfo?.categories}</h3>
                <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="" />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default MyComponent;
