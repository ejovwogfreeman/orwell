import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [change, setChange] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setChange(true);
      } else {
        setChange(false);
      }
    });
  }, []);
  return (
    <nav className={change ? "sticky" : "stick"}>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/">ABOUT</Link>
        </li>
        <li>
          <Link to="/">SERVICES</Link>
        </li>
        <li>
          <Link to="/">PROJECTS</Link>
        </li>
        <li>
          <Link to="/">PEOPLE</Link>
        </li>
        <li>
          <Link to="/">INVESTORS LOGIN</Link>
        </li>
        <li>
          <Link to="/">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
