import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const MobileNav = ({ open, handleOpen }) => {
  return (
    <ul className={open ? "mobile-nav" : "hide"}>
      <div className="close-icon">
        <MdOutlineClose className="close" onClick={handleOpen} />
      </div>
      <li onClick={() => handleOpen()}>
        <Link to="/">HOME</Link>
      </li>
      <li onClick={() => handleOpen()}>
        <Link to="/about">ABOUT</Link>
      </li>
      <li onClick={() => handleOpen()}>
        <Link to="/services">SERVICES</Link>
      </li>
      <li onClick={() => handleOpen()}>
        <Link to="/projects">PROJECTS</Link>
      </li>
      <li onClick={() => handleOpen()}>
        <Link to="/people">PEOPLE</Link>
      </li>
      <li onClick={() => handleOpen()}>
        <Link to="/login">INVESTORS LOGIN</Link>
      </li>
      <li onClick={() => handleOpen()}>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  );
};

export default MobileNav;
