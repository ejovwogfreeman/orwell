import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const MobileNav = ({ open, handleOpen }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleShow2 = () => {
    setShow2(!show2);
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
      <li>
        <div className="dropdown-mobile" onClick={handleShow2}>
          <span
            className="d-flex align-items-center justify-content-center span"
            style={{ padding: "20px" }}
          >
            <span style={{ marginRight: "5px" }}>PROJECTS</span>
            <IoMdArrowDropdown />
          </span>
          <ul
            className={
              show2 ? "dropdown-items-mobile-block" : "dropdown-items-mobile"
            }
          >
            <li onClick={() => window.location.reload(true)}>
              <Link to="/projects/cedar_court">CEDAR COURT</Link>
            </li>
            <li onClick={() => window.location.reload(true)}>
              <Link to="/projects/frazer_court">FRAZER COURT</Link>
            </li>
            <li onClick={() => window.location.reload(true)}>
              <Link to="/projects/juniper_court">JUNIPER COURT</Link>
            </li>
            <li onClick={() => window.location.reload(true)}>
              <Link to="/projects/magnolia_court">MAGNOLIA COURT</Link>
            </li>
            <li onClick={() => window.location.reload(true)}>
              <Link to="/projects/medina_court">MEDINA COURT</Link>
            </li>
          </ul>
        </div>
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
      <li onClick={() => handleOpen()}>
        <Link to="/save_to_own">SAVE TO OWN</Link>
      </li>
    </ul>
  );
};

export default MobileNav;
