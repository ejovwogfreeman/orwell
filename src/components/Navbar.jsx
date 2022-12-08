import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import { IoMdArrowDropdown } from "react-icons/io";

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
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <MobileNav open={open} handleOpen={handleOpen} />
      <ul className="links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/about">
              ABOUT <IoMdArrowDropdown />
            </Link>
            <ul className="dropdown-items">
              <li>
                <Link to="/mission">OUR MISSION</Link>
              </li>
              <li>
                <Link to="/vision">OUR VISION</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="/people">PEOPLE</Link>
        </li>
        <li>
          <Link to="/login">INVESTORS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className="menu-icon">
        <AiOutlineMenu onClick={handleOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
