import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      &copy; COPYRIGHT {new Date().getFullYear()} - ALL RIGHTS RESERVED.
    </footer>
  );
};

export default Footer;
