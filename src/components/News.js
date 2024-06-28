import React, { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";
import Spinner from "./Spinner";
import "../css/News.css";

const News = ({ category, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = useCallback(async () => {
    setProgress(10);
    const url = `https://inshortsapi.vercel.app/news?category=${category}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    const newsData = parsedData.data;
    // console.log(newsData);
    setArticles(newsData);
    setLoading(false);
    setProgress(100);
  }, [category, setProgress]);

  useEffect(() => {
    document.title = `TaazaKhabr - ${capitalizeFirstLetter(category)}`;
    updateNews();
  }, [category, updateNews]);

  return (
    <div className="container">
      <h2>Fresh News at Your Fingertips : {capitalizeFirstLetter(category)}</h2>
      {loading && <Spinner />}
      {articles.map((element) => (
        <div className="news" key={element.id}>
          <NewsItem
            title={element.title ? element.title.slice(0, 100) : ""}
            description={element.content ? element.content.slice(0, 180) : ""}
            imageUrl={element.imageUrl}
            newsURL={element.readMoreUrl}
            author={element.author}
            date={element.date}
          />
        </div>
      ))}
    </div>
  );
};

News.defaultProps = {
  category: "",
};

News.propTypes = {
  category: propTypes.string,
  setProgress: propTypes.func.isRequired,
};

export default News;
