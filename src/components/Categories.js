import React from "react";
import { Link } from "react-router-dom";
import "../css/Categories.css";

const Categories = () => {
  return (
    <>
      <div className="container my-2">
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/technology" className="btn btn-outline-secondary w-10">
            Tech
          </Link>
          <Link to="/sports" className="btn btn-outline-secondary w-10">
            Sports
          </Link>
          <Link to="/science" className="btn btn-outline-secondary w-10">
            Science
          </Link>
          <Link to="/business" className="btn btn-outline-secondary w-10">
            Business
          </Link>
          <Link to="/politics" className="btn btn-outline-secondary w-10">
            Politics
          </Link>
          <Link to="/entertainment" className="btn btn-outline-secondary w-10">
            Entertainment
          </Link>
          <Link to="/world" className="btn btn-outline-secondary w-10">
            World
          </Link>
          <Link to="/hatke" className="btn btn-outline-secondary w-10">
            Hatke
          </Link>
        </div>
      </div>
    </>
  );
};
export default Categories;
