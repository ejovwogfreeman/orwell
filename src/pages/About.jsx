import React, { useState } from "react";
import "../css/Contact.css";
import { CgMail } from "react-icons/cg";
import { MdCall, MdLocationOn } from "react-icons/md";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setNumber("");
    setContent("");
  };

  return (
    <>
      <ScrollToTop />
      <header style={{ height: "400px" }}>
        <p className="display-3">About</p>
      </header>
      <div className="section">
        <div className="text">
          Thank you for trusting us with the search for your new investment.
          We're here to help you in your hunt to find the right investment for
          your family. <br /> Orwell Properties Management Limited is one of the
          leading real estate company in Nigeria that aims to providing unique
          experiences to its Customers making real estate accessible for
          everyone. <br /> We're a technology- oriented company specializing in
          the areas of land purchasing, estate development and management. We
          also pride ourselves in securing viable investment opportunities for
          clients home and abroad.
        </div>
      </div>
    </>
  );
};

export default Contact;
