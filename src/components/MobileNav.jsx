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
          <span
            className="d-flex align-items-center justify-content-center span"
            style={{ padding: "20px" }}
          >
            <span style={{ marginRight: "5px" }}>ABOUT</span>
            <IoMdArrowDropdown />
          </span>
          <ul
            className={
              show ? "dropdown-items-mobile-block" : "dropdown-items-mobile"
            }
          >
            <li onClick={() => handleOpen()}>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li onClick={() => handleOpen()}>
              <Link to="/mission">OUR MISSION</Link>
            </li>
            <li onClick={() => handleOpen()}>
              <Link to="/vision">OUR VISION</Link>
            </li>
            <li onClick={() => handleOpen()}>
              <Link to="/values">OUR VALUES</Link>
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
