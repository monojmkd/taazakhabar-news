import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class NavBar extends Component {
  render() {
    return (
      <div>

<Navbar bg="dark"  data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="#home" style={{fontSize: "150%"}}>Navbar</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home" style={{fontSize: "110%", justifyContent:"center"}}>Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
      </div>
    )
  }
}
