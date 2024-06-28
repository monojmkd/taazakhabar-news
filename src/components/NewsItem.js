import React from "react";
import "../css/NewsItem.css";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsURL, author, date } = props;
  let defUrlImg =
    "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/google-io-2023.jpeg";
  return (
    <div className="news-card mb-2">
      <div className="row g-1">
        {/* <div>
          <span className="badge rounded-pill bg-danger fs-6">{source}</span>
        </div> */}
        <div className="image col-md-4 my-2">
          <img
            src={imageUrl ? imageUrl : defUrlImg}
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
          <div className="card-footer mt-5">
            <small className="text-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
