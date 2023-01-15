import React from "react";
import "../css/Footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div style={{ fontSize: "25px" }}>
        <a href="https://web.facebook.com/OrwellNG?mibextid=ZbWKwL&_rdc=1&_rdr">
          <BsFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/orwellpropertiesmanagement/">
          <BsInstagram className="icon" />
        </a>
        <a href="https://twitter.com/OrwellNG?t=NiFfK7siOncP2dHi3EvKUw&s=08">
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
