import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [change, setChange] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
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
      <MobileNav open={open} handleOpen={handleOpen} />
      <ul className="links">
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
      <div className="menu-icon">
        <AiOutlineMenu onClick={handleOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
