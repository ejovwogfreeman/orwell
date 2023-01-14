import React from "react";
import "../css/Footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div style={{ fontSize: "25px" }}>
        <BsFacebook className="icon" />
        <BsInstagram className="icon" />
        <BsTwitter className="icon" />
        <BsLinkedin className="icon" />
      </div>
      <span>
        &copy; COPYRIGHT {new Date().getFullYear()} - ALL RIGHTS RESERVED.
      </span>
    </footer>
  );
};

export default Footer;
