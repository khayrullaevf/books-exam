import React, { useEffect } from "react";
import "./about.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { fetchData } from "../../redux/slice/fetchData";
import aboutBg from "../../assets/imgs/about-hero.png";
import backBtn from "../../assets/icons/back-btn.svg";
const API__KEY = "AIzaSyBrsRM04Q1qWqMqfnDd-3uulkzpEFhlDf0";
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

  console.log(data);
  return (
    <div
      className="single__book"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* <div className="single__book-card">
        <img
          src={data?.volumeInfo?.imageLinks?.thumbnail}
          alt={data?.volumeInfo?.title}
        />
        <div >
          <h1>{data?.volumeInfo?.title}</h1>
          <h2>{data?.volumeInfo?.authors?.[0]}</h2>
          <h3>{data?.volumeInfo?.subtitle}</h3>
          <h5>{data?.volumeInfo?.printedPageCount} pages</h5>
          <h5>{data?.volumeInfo?.publishedDate}</h5>
          <a target="_blank"  href={data?.volumeInfo?.previewLink} rel="noreferrer">Preview</a>
          <Link to="/" style={{}}>
            <button>back to home</button>
          </Link>
        </div>
      </div> */}
      <div className="container">
        <Link to="/">
          <img src={backBtn} alt="back" />
        </Link>
        <div className="single__book-card">
          <img
            src={data?.volumeInfo?.imageLinks?.thumbnail}
            alt={data?.volumeInfo?.title}
          />
          <div className="single__book-card__info">
            <h2>{data?.volumeInfo?.title}</h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              <h3>by {data?.volumeInfo?.authors?.[0]}</h3>
              <h3>{data?.volumeInfo?.publishedDate}</h3>
            </div>
            <div style={{ display: "flex", gap: "0.3rem" }}>
              <a
                href={data?.saleInfo?.buyLink}
                style={{ textDecoration: "none" }}
              >
                <button>Buy now</button>
              </a>
              <a
                href={data?.volumeInfo?.infoLink}
                style={{ textDecoration: "none" }}
              >
                <button>Read Book</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
