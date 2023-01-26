import React from "react";
import "../css/SaveToOwn.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../assets/save1.jpg";
import img2 from "../assets/save2.jpg";
import img3 from "../assets/save3.jpg";
import img4 from "../assets/save4.jpg";
import img5 from "../assets/save5.jpg";
import img6 from "../assets/save6.jpg";

const SaveToOwn = () => {
  const options = {
    loop: true,
    nav: true,
    margin: 10,
    navText: ["&#x2770;", "&#x2771;"],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };

  return (
    <div className="save-cont">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <img src={img1} alt="" style={{ filter: "brightness(100%)" }} />
        </div>
        <div className="item">
          <img src={img2} alt="" style={{ filter: "brightness(100%)" }} />
        </div>
        <div className="item">
          <img src={img3} alt="" style={{ filter: "brightness(100%)" }} />
        </div>
        <div className="item">
          <img src={img4} alt="" style={{ filter: "brightness(100%)" }} />
        </div>
        <div className="item">
          <img src={img5} alt="" style={{ filter: "brightness(100%)" }} />
        </div>
        <div className="item">
          <img src={img6} alt="" style={{ filter: "brightness(100%)" }} />
        </div>
      </OwlCarousel>
      <h3 style={{ textAlign: "left" }} className="mt-3">
        Orwell properties management introduces Save to own!
      </h3>

      <p>
        Save to own is a one year payment plan program were subscribers pay
        monthly for 12 months and at the end of the year get a plot of land!.
        Our save to own scheme offers subscribers the flexibility and
        convenience of owning a piece of estate land within the FCT.
      </p>

      <h4>We have 3 categories.</h4>

      <ul style={{ paddingLeft: "0px" }}>
        <li>
          (1)&nbsp;&nbsp;&nbsp;(i)Bronze plan~ 140k monthly for 300sqm <br />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ii)Bronze plan~ 265k
          monthly for 500sqm
        </li>
        <li>
          (2)&nbsp;&nbsp;&nbsp;(i) Silver plan~ 265k monthly for 300sqm <br />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ii)Silver plan~ 350k
          monthly for 500sqm
        </li>
        <li>
          (3)&nbsp;&nbsp;&nbsp;(i)Gold plan ~#760k monthly for 300sqm <br />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ii)Gold plan ~ 1.260k
          monthly for 500sqm
        </li>
      </ul>

      <p>
        Bronze packages are Juniper and Medina Court located at Kurudu and
        Jikwoyi.
      </p>

      <p>
        Silver packages are Fraser Court and Cedar court located at Idu and
        Kubwa expressway.
      </p>
    </div>
  );
};

export default SaveToOwn;
