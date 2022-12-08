import React from "react";
import "../css/Contact.css";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  return (
    <>
      <ScrollToTop />
      <header style={{ height: "400px" }}>
        <p className="display-3">About</p>
      </header>
      <div className="section">
        <div className="text">
          Our Company is a multifaceted commercial real estate firm that offers
          property development and management, marketing, construction, and
          facilities management services for customers in Nigeria. Since our
          establishment in 2022, the company has been helping customers find
          homes and lands that suits their lifestyle. We specialize in making
          affordable deals for first-time homeowners and those looking to make
          viable investment in Nigeria and overseas.
          <br /> <br />
          With our professional team of marketing executives, we have catered to
          the needs of all our customers as per their real estate requirements
          within the past few years of operation and will continue to do so. We
          pride ourselves on developing long and prosperous relationships with
          our customers.
        </div>
      </div>
    </>
  );
};

export default Contact;
