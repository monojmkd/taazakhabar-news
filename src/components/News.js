import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    props.setProgress(10);
    // const url = `https://inshorts.me/news/topics/${props.category}`;
    // const url = `https://taazakhabr-cors.vercel.app/proxy/inshorts/api/en/search/trending_topics/${props.category}?page=1&type=NEWS_CATEGORY`;
    const url = `https://inshortsapi.vercel.app/news?category=${props.category}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    // console.log("data", parsedData.data);
    props.setProgress(70);
    const newsData = parsedData.data;
    console.log(newsData);
    setArticles(newsData);
    setLoading(false);
    props.setProgress(100);
  };

  //The useEffect Hook allows you to perform side effects in your components.
  useEffect(() => {
    document.title = `TaazaKhabr - ${capitalizeFirstLetter(props.category)} `;
    updateNews(); // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h2
        style={{
          fontFamily: "'Dai Banna SIL', serif",
          textDecoration: "underline",
        }}
      >
        Fresh News at Your Fingertips : {capitalizeFirstLetter(props.category)}{" "}
      </h2>
      {loading && <Spinner />}
      {articles.map((element) => {
        return (
          <div key={element.id}>
            <NewsItem
              title={element.title ? element.title.slice(0, 100) : ""}
              description={element.content ? element.content.slice(0, 170) : ""}
              imageUrl={element.imageUrl}
              newsURL={element.readMoreUrl}
              author={element.author}
              date={element.date}
              // source={element.url}
            />
          </div>
        );
      })}
    </div>
  );
};

News.defaultProps = {
  category: "",
};

News.propTypes = {
  category: propTypes.string,
};

export default News;
