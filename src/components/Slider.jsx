import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../assets/house1.jpg";
import img2 from "../assets/house2.jpg";
import img3 from "../assets/house3.jpg";
import img4 from "../assets/house4.jpg";
import "../css/Slider.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const options = {
    loop: true,
    margin: 0,
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
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  };

  return (
    <div className="slider-cont">
      <div className="shadow-cont">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img src={img1} alt="" />
            <div className="text">
              <p>Lexicon City</p>
              <Link>View More</Link>
            </div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="text">
              <p>Lexicon City</p>
              <Link>View More</Link>
            </div>
          </div>
          <div className="item">
            <img src={img3} alt="" />
            <div className="text">
              <p>Lexicon City</p>
              <Link>View More</Link>
            </div>
          </div>
          <div className="item">
            <img src={img4} alt="" />
            <div className="text">
              <p>Lexicon City</p>
              <Link>View More</Link>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Slider;
