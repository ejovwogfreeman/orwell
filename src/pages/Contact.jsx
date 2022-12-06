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
        <p className="display-3">Contact</p>
      </header>
      <div class="mapouter" style={{ marginTop: "60px", padding: "0px 5%" }}>
        <div class="gmap_canvas">
          <iframe
            title="google-map"
            width="100%"
            height="300px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=ring%20road%20benin%20city%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <div>
        <div className="contact-cont">
          <div className="address">
            <h4>GET IN TOUCH</h4>
            <p>
              Address: <br />
              <MdLocationOn className="icon" /> &nbsp; Orwell Real Estate
            </p>
            <p>
              Send a Mail: <br />
              <span>
                <CgMail className="icon" />
                &nbsp; orwell@properties.com
              </span>
            </p>
            <p>
              Call us: <br />
              <span>
                <MdCall className="icon" /> &nbsp; +2779 985 8789
              </span>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <h4>SEND A MESSAGE</h4>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="YOUR NAME*"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL*"
                required
              />
              <input
                type="number"
                value={number}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR PHONE NUMBER*"
                required
              />
            </div>
            <div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="MESSAGE*"
                required
              />
            </div>
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
