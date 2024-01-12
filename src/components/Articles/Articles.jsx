import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/fetchData";
import Loading from "../Loading/Loading";
import "./articles.scss";
import Article from "../Article/Article";

const Articles = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data?.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  useEffect(() => {
    dispatch(fetchData("https://api.spaceflightnewsapi.net/v3/articles"));
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error occurred</p>;
  }
  console.log(data);
  return (
    <div className="articles">
      <div className="container">
        <div className="articles__cards">
          {Array.isArray(data)
            ? data.map((article, index) => (
                <Article key={index} article={article} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Articles;
