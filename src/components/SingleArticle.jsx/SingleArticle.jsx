import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../redux/slice/fetchData";

import "./singlearticle.scss";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const SingleArticle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  useEffect(() => {
    dispatch(fetchData(`https://api.spaceflightnewsapi.net/v3/articles/${id}`));
  }, [dispatch, id]);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error occurred</p>;
  }
  console.log(data);

  return (
    <div className="single__article">
      <div className="single__article-card">
        <img src={data?.imageUrl} alt={data?.title} />
        <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
          <h2>{data?.title}</h2>
          <p>{data?.summary.slice(0,180)}...</p>
          <Link to="/blog" style={{ paddingLeft: "3rem" }}>
            <button>back to blogs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
