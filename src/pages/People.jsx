import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import img from "../assets/default.jpg";
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
          <img
            src={img}
            alt=""
            style={{ width: "200px", border: "1px solid gray" }}
          />
          <h3 className="mt-3">Margaret Oki</h3>
          <h5>CEO</h5>
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
          <img
            src={img}
            alt=""
            style={{ width: "200px", border: "1px solid gray" }}
          />
          <h3 className="mt-3">Ben Oki</h3>
          <h5>CFO</h5>
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
          <img
            src={img}
            alt=""
            style={{ width: "200px", border: "1px solid gray" }}
          />
          <h3 className="mt-3">Odafe Otobo</h3>
          {/* <h5>Business Development Manager</h5> */}
          <h5>BDM</h5>
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
