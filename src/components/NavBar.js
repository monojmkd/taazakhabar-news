import React, { Component } from "react";
import "../css/NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg center navbar-light bg-light">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              style={{ display: "flex", justifyContent: "center" }}
              id="navbarSupportedContent"
            >
              <a
                style={{ color: "black" }}
                href="https://github.com/monojmkd/taazakhabar-news"
              >
                <i className="bi mx-3 fs-4 bi-github"></i>
              </a>
              <a
                style={{ color: "black" }}
                href="https://www.facebook.com/monoj.mkd09"
              >
                <i className="bi mx-3 fs-4 bi-facebook"></i>
              </a>
              <a
                style={{ color: "black" }}
                href="https://www.linkedin.com/in/monoj-kumar-das-019340a9"
              >
                <i className="bi mx-3 fs-4 bi-linkedin"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
