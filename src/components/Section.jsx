import React from "react";
import "../css/Section.css";
import video from "../assets/video.mp4";
import { Link } from "react-router-dom";
import pdf from "../assets/orwell_subscriptin.pdf";

const Section = () => {
  const onButtonClick = () => {
    fetch(pdf).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="section">
      <div className="text">
        Thank you for trusting us with the search for your new investment. We're
        here to help you in your hunt to find the right investment for your
        family. <br /> Orwell Properties Management Limited is one of the
        leading real estate company in Nigeria that aims to providing unique
        experiences to its Customers making real estate accessible for everyone.{" "}
        <br /> We're a technology- oriented company specializing in the areas of
        land purchasing, estate development and management. We also pride
        ourselves in securing viable investment opportunities for clients home
        and abroad. <br /> <br />
        We believe in delivering extraordinary experiences to our customers by
        providing them the best real estate investments at a very reasonable
        cost. Are you ready to find your dream home or land? We are ready to
        help you make the best investment decision ever. <br /> <br />
        <video src={video} controls width="100%"></video>
        <div style={{ marginTop: "20px" }}>
          <Link to="/pdf" className="pdf-link">
            Download And Fill Our Form
          </Link>
        </div>
        <button onClick={onButtonClick} className="pdf-btn">
          Download And Fill Our Form
        </button>
        <div style={{ fontSize: "20px", marginTop: "2rem" }}>
          <h3>Our Health & Safety Commitment</h3>
          <p style={{ textAlign: "center" }}>
            We do not compromise when it comes to Health & Safety. Our aim is to
            be the recognized leader in Health & Safety in our sector. Through a
            range of communications programmes and targeted training initiatives
            we are working hard to achieve our Target Zero goal: zero accidents
            and zero illnesses caused by work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
