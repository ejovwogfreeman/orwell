import React from "react";
import "../css/Footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div style={{ fontSize: "25px" }}>
        <a href="">
          <BsFacebook className="icon" />
        </a>
        <a href="">
          <BsInstagram className="icon" />
        </a>
        <a href="">
          <BsTwitter className="icon" />
        </a>
        <a href="">
          <BsLinkedin className="icon" />
        </a>
      </div>
      <span>
        &copy; COPYRIGHT {new Date().getFullYear()} - ALL RIGHTS RESERVED.
      </span>
    </footer>
  );
};

export default Footer;
