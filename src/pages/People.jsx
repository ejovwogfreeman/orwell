import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import img from "../assets/house1.jpg";
import "../css/People.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const People = () => {
  return (
    <div className="people-cont">
      <ScrollToTop />
      <p className="display-5 text-center pb-3">People</p>
      <div className="people">
        <div className="person">
          <img src={img} alt="" style={{ width: "200px" }} />
          <h3 className="mt-3">Neil Strelitz</h3>
          <h5>Director</h5>
          <h5>MRICS</h5>
          <div className="icons">
            <a href="https://facebook.com">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com">
              <FaTwitterSquare />
            </a>
            <a href="https://instagram.com">
              <FaInstagramSquare />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="person">
          <img src={img} alt="" style={{ width: "200px" }} />
          <h3 className="mt-3">Neil Strelitz</h3>
          <h5>Director</h5>
          <h5>MRICS</h5>
          <div className="icons">
            <a href="https://facebook.com">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com">
              <FaTwitterSquare />
            </a>
            <a href="https://instagram.com">
              <FaInstagramSquare />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
