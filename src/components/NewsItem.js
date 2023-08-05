import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsURL, author, date, source } =
  props;
let defUrlImg =
  "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/google-io-2023.jpeg";
  return (
    <div className="card mb-2" style={{ maxWidth: "100%" }}>
    <div className="row g-1" style={{ backgroundColor: "#EDEDED" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          position: "absolute",
          left: 10,
        }}
      >
        <span className="badge rounded-pill bg-danger fs-6">{source}</span>
      </div>
      <div
        className="col-md-4 my-1"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={imageUrl ? imageUrl : defUrlImg}
          style={{ width: "21em", height: "15em" }}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5
            className="card-title fw-bold"
            style={{
              fontFamily: " 'Lora', serif",
              textDecoration: "underline",
            }}
          >
            {title}
          </h5>
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
            By {author ? author : "Unknown"} on{" "}
            {new Date(date).toGMTString()}
          </small>
        </div>
      </div>
    </div>
  </div>
  )
}
export default  NewsItem;