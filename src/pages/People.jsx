import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import img1 from "../assets/margaret_oki.jpg";
import img2 from "../assets/ben_oki.jpg";
import img3 from "../assets/lawrence_otobo.jpg";
import "../css/People.css";
import { CgMail } from "react-icons/cg";
import { MdCall } from "react-icons/md";

const People = () => {
  return (
    <div className="people-cont">
      <ScrollToTop />
      <p className="display-5 text-center pb-3">People</p>
      <div className="people">
        <div className="person d-sm-flex mb-3">
          <div style={{ flex: "1" }}>
            <img src={img1} alt="" className="img-person" />
          </div>
          <div style={{ flex: "2" }} className="img-text">
            <h3 className="mt-3">Margaret Oki</h3>
            <h5>CEO</h5>
            <p>
              Call: <br />
              <span>
                <MdCall className="icon" /> &nbsp; +234 814 693 2080
              </span>
            </p>
            <p>
              Email: <br />
              <span>
                <CgMail className="icon" />
                &nbsp; margaret@orwellpropertiesmanagement.com
              </span>
            </p>
          </div>
        </div>
        <div className="person d-sm-flex mb-3">
          <div style={{ flex: "1" }}>
            <img src={img2} alt="" className="img-person" />
          </div>
          <div style={{ flex: "2" }} className="img-text">
            <h3 className="mt-3">Ben Oki</h3>
            <h5>CFO</h5>
            <p>
              Call: <br />
              <span>
                <MdCall className="icon" /> &nbsp; +234 803 318 6993
              </span>
            </p>
            <p>
              Email: <br />
              <span>
                <CgMail className="icon" />
                &nbsp; ben@orwellpropertiesmanagement.com
              </span>
            </p>
          </div>
        </div>
        <div className="person d-sm-flex mb-3">
          <div style={{ flex: "1" }}>
            <img src={img3} alt="" className="img-person" />
          </div>
          <div style={{ flex: "2" }} className="img-text">
            <h3 className="mt-3">Lawrence Otobo</h3>
            <h5>Project Coordinator</h5>
            <p>
              Call: <br />
              <span>
                <MdCall className="icon" /> &nbsp; +234 813 446 6174
              </span>
            </p>
            <p>
              Email: <br />
              <span>
                <CgMail className="icon" />
                &nbsp; lawrence@orwellpropertiesmanagement.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
