import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

export default class News extends Component {
  
  static defaultProps = {
    category: "",

}
static propTypes = {
   category: PropTypes.string

}

  articles = [];
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

    capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }  

  async componentDidMount() {
   // let url = `https://newsdata.io/api/1/news?apikey=pub_27203c39257b95509c4a5ceb0c7c4f5c6006c&country=us`;
    let url = `https://inshorts.me/news/topics/${this.props.category}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.data);
    this.setState({
      articles: parsedData.data.articles })}

  render() {
    return (
      <div class="container" >
        <h2 style={{fontFamily: "'Dai Banna SIL', serif"}}> Fresh News at Your Fingertips : {this.capitalizeFirstLetter(this.props.category)}  </h2>
        {this.state.articles.map((element) => {
            return (
              <div key={element.hashId}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 100) : ""}
                  description={
                    element.content ? element.content.slice(0, 170) : ""
                  }
                  imageUrl={element.imageUrl}
                  newsURL={element.sourceUrl}
                  author={element.authorName}
                    date={element.createdAt}
                    source={element.sourceName}
                />
              </div>
            );
          })}
        
      </div>
    );
  }
}
