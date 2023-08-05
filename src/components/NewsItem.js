import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsURL } =
      this.props;
    // let defUrlImg =
    //   "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/google-io-2023.jpeg";
    return (
      <div className="card mb-3" style={{maxWidth: "100%"}}>
       <div class="row g-0">
    <div class="col-md-4">
    <img src={imageUrl} class="card-img-top" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}...</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <a variant="primary" href={newsURL} target="_blank"  rel="noreferrer" >
            Read More
          </a>
      </div>
    </div>
      </div>
      </div>
    );
  }
}
