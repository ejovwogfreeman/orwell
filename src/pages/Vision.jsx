import React from "react";
import "../css/Contact.css";
import ScrollToTop from "../components/ScrollToTop";

const Vision = () => {
  return (
    <>
      <ScrollToTop />
      <header style={{ height: "400px" }}>
        <p className="display-3">Our Vision</p>
      </header>
      <div className="section">
        <div className="text">
          Our Vision is to build a future where the Orwell Properties Management
          Limited brand is a name known across Nigeria and Pan Africa and
          globally for development, and marketing of premium real estate with
          unmatched value for money.
        </div>
      </div>
    </>
  );
};

export default Vision;
