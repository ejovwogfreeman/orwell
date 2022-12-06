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
  );
};

export default MobileNav;
