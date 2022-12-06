import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const MobileNav = ({ open, handleOpen }) => {
  return (
    <ul className={open ? "mobile-nav" : "hide"}>
      <div className="close-icon">
        <MdOutlineClose className="close" onClick={handleOpen} />
      </div>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
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
        <Link to="/login">INVESTORS LOGIN</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  );
};

export default MobileNav;
