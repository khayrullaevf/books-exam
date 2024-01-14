import React, { useState } from "react";
import searchBar from "../../assets/icons/search.svg";
import { useDispatch  } from "react-redux";
import {fetchData} from "../../redux/slice/fetchData";
const API__KEY = "AIzaSyCkOD-5iwmzMP5or412viJWJvM6yHkHn2M";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchData(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm.trim().toLowerCase()}&inauthor:keyes&key=${API__KEY}`
      )
    );
    setSearchTerm('')
  };


  return (
    <form className="hero__form" onSubmit={handleSubmit}>
      <button type="submit">
        {" "}
        <img src={searchBar} alt="searchBar" />
      </button>
      <input
        type="text"
        placeholder="Search books..."
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
