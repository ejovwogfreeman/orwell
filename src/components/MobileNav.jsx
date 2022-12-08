import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const MobileNav = ({ open, handleOpen }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <ul className={open ? "mobile-nav" : "hide"}>
      <div className="close-icon">
        <MdOutlineClose className="close" onClick={handleOpen} />
      </div>
      <li onClick={() => handleOpen()}>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <div className="dropdown-mobile" onClick={handleShow}>
          <Link to="/about" className="d-flex align-items-center">
            <span style={{ marginRight: "5px" }}>ABOUT</span>
            <IoMdArrowDropdown />
          </Link>
          <ul
            className={
              show ? "dropdown-items-mobile-block" : "dropdown-items-mobile"
            }
          >
            <li>
              <Link to="/mission">OUR MISSION</Link>
            </li>
            <li>
              <Link to="/vision">OUR VISION</Link>
            </li>
          </ul>
        </div>
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
        <Link to="/login">INVESTORS</Link>
      </li>
      <li onClick={() => handleOpen()}>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  );
};

export default MobileNav;
