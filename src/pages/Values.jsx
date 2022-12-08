import React from "react";
import "../css/Contact.css";
import ScrollToTop from "../components/ScrollToTop";
import { GiCheckMark } from "react-icons/gi";

const Values = () => {
  return (
    <>
      <ScrollToTop />
      <header style={{ height: "400px" }}>
        <p className="display-3">Our Values</p>
      </header>
      <div className="section">
        <div className="text">
          <ul style={{ padding: "0px" }}>
            <li>
              <span>
                <GiCheckMark />
              </span>
              <span className="ms-3">Dependability</span>
            </li>
            <li>
              <span>
                <GiCheckMark />
              </span>
              <span className="ms-3">Affordability</span>
            </li>
            <li>
              <span>
                <GiCheckMark />
              </span>
              <span className="ms-3">Team Working Spirit</span>
            </li>
            <li>
              <span>
                <GiCheckMark />
              </span>
              <span className="ms-3">Problem Solving</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Values;
