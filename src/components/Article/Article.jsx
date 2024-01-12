import React from "react";
import "./article.scss";
import defaultImage from '../../assets/imgs/no-image.png'
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <Link to={`/blog/${article?.id}`} style={{textDecoration:'none'}}>
      <div className="article">
        <img src={article?.imageUrl || defaultImage} alt={article?.title} />
        <div className="article__info">
          <h2>{article?.title}</h2>
          <p>{article?.summary.slice(0, 120)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
