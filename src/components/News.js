import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
   // let url = `https://newsdata.io/api/1/news?apikey=pub_27203c39257b95509c4a5ceb0c7c4f5c6006c&country=us`;
    let url = `https://inshorts.me/news/all?limit=50`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.data);
    this.setState({
      articles: parsedData.data.articles })}

  render() {
    return (
      <div class="container">
        <h2>MYNEWS- TOP HEADLINES</h2>
        {this.state.articles.map((element) => {
            return (
              <div key={element.hashId}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 70) : ""}
                  description={
                    element.content ? element.content.slice(0, 90) : ""
                  }
                  imageUrl={element.imageUrl}
                  newsURL={element.sourceUrl}
                />
              </div>
            );
          })}
        
      </div>
    );
  }
}
