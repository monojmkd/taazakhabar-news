import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="py-5 bg-dark">
        <div className="container px-4">
          <p className="m-0 text-center text-white">
            Copyright &copy; TaazaKhabr | By{" "}
            <a
              href="https://github.com/monojmkd"
              target="_blank"
              rel="noreferrer"
            >
              Monoj Kumar Das
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
