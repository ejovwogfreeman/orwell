import React from "react";
import "../css/Services.css";
import ScrollToTop from "../components/ScrollToTop";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <>
      <ScrollToTop />
      <p className="display-5 text-center pt-5">Services</p>
      <div className="service-text" style={{ fontSize: "20px" }}>
        <p>
          We cater to our clients needs, adjust based on feedback and maintain a
          constant position of readiness and our services includes the
          following:
        </p>
        <ul style={{ padding: "0px" }}>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Land Sales</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Facility Management</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3"> Real Estate Advisory</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3"> Estate Agency</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Project Management</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Home Search</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Property Management & Development</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Construction</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Rental</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Interior Design</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Architecture</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">Project & Facility Management</span>
          </li>
          <li>
            <span>
              <GiCheckMark />
            </span>
            <span className="ms-3">MEP</span>
          </li>
        </ul>
      </div>
      <header
        style={{
          height: "200px",
          justifyContent: "left",
          padding: "50px 5%",
        }}
      >
        <div style={{ fontSize: "20px" }}>
          <h3>Our Health & Safety Commitment</h3>
          <p>
            We do not compromise when it comes to Health & Safety. Our aim is to
            be the recognized leader in Health & Safety in our sector. Through a
            range of communications programmes and targeted training initiatives
            we are working hard to achieve our Target Zero goal: zero accidents
            and zero illnesses caused by work.
          </p>
        </div>
      </header>
    </>
  );
};

export default Services;
