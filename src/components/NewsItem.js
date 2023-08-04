import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

export default class NewsItem extends Component {
       
  render() {
    let { title, description, imageUrl, newsURL, author, date, source } =
    this.props;
  let defUrlImg ="https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/google-io-2023.jpeg";
    return (
        <Container className="pt-4">
        <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}...
                </Card.Text>
                <Button variant="primary" href={newsURL} target="_blank" >Read More</Button>
              </Card.Body>
            </Card>
            </Container>
    );
  }
}
