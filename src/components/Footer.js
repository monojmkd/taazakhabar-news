import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-5 bg-dark">
        <div className="container px-4">
          <p
            className="m-0 text-center text-white"
            style={{ fontWeight: "500" }}
          >
            Copyright &copy; TaazaKhabr | By{" "}
            <a
              href="https://github.com/monojmkd"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#FEE715ff" }}
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
