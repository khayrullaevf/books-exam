import React, { useEffect } from "react";
import "./about.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { fetchData } from "../../redux/slice/fetchData";

const API__KEY = "AIzaSyBvoZyYhC0yBcKFwCHqQN5CVew1cU2qgn8";
const About = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  useEffect(() => {
    dispatch(
      fetchData(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${API__KEY}`
      )
    );
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error occurred</p>;
  }

  return (
    <div className="single__book">
      <div className="single__book-card">
        <img
          src={data?.volumeInfo?.imageLinks?.thumbnail}
          alt={data?.volumeInfo?.title}
        />
        <div>
          <h1>{data?.volumeInfo?.title}</h1>
          <h2>{data?.volumeInfo?.authors?.[0]}</h2>
          <h3>{data?.volumeInfo?.subtitle}</h3>
          <Link to="/" style={{}}>
            <button>back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
