import React from "react";
import "../css/Contact.css";
import ScrollToTop from "../components/ScrollToTop";

const Mission = () => {
  return (
    <>
      <ScrollToTop />
      <header style={{ height: "400px" }}>
        <p className="display-3">Our Mission</p>
      </header>
      <div className="section">
        <div className="text">
          To successfully complete several commercial and residential projects
          and achieving a high reputed standing position in the Building
          industry and real estate market with continuing functioning many more
          other businesses.
        </div>
      </div>
    </>
  );
};

export default Mission;
