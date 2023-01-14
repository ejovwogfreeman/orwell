import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import img1 from "../assets/cedar_court_1.jpg";
import img2 from "../assets/cedar_court_2.jpg";
import img3 from "../assets/cedar_court_3.jpg";
import img4 from "../assets/frazer_1.jpg";
import img5 from "../assets/frazer_2.jpg";
import img6 from "../assets/frazer_3.jpg";
import img7 from "../assets/juniper_court_1.jpg";
import img8 from "../assets/juniper_court_2.jpg";
import img9 from "../assets/juniper_court_3.jpg";
import img10 from "../assets/magnolia_court_1.jpg";
import img11 from "../assets/magnolia_court_2.jpg";
import img12 from "../assets/magnolia_court_3.jpg";
import img13 from "../assets/medina_court_1.jpg";
import img14 from "../assets/medina_court_2.jpg";
import img15 from "../assets/medina_court_3.jpg";
import "../css/Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    img: img1,
    text: "Cedar Court",
  },
  {
    id: 2,
    img: img2,
    text: "Cedar Court",
  },
  {
    id: 3,
    img: img3,
    text: "Cedar Court",
  },
  {
    id: 4,
    img: img4,
    text: "Frazer",
  },
  {
    id: 5,
    img: img5,
    text: "Frazer",
  },
  {
    id: 6,
    img: img6,
    text: "Frazer",
  },
  {
    id: 7,
    img: img7,
    text: "Juniper Court",
  },
  {
    id: 8,
    img: img8,
    text: "Juniper Court",
  },
  {
    id: 9,
    img: img9,
    text: "Juniper Court",
  },
  {
    id: 10,
    img: img10,
    text: "Magnolia Court",
  },
  {
    id: 11,
    img: img11,
    text: "Magnolia Court",
  },
  {
    id: 12,
    img: img12,
    text: "Magnolia Court",
  },
  {
    id: 13,
    img: img13,
    text: "Medina Court",
  },
  {
    id: 14,
    img: img14,
    text: "Medina Court",
  },
  {
    id: 15,
    img: img15,
    text: "Medina Court",
  },
];

const Projects = () => {
  return (
    <div className="project-cont">
      <ScrollToTop />
      <p className="display-5 text-center pb-3">Projects</p>
      <div style={{ marginBottom: "1rem" }}>
        <span>Sort By:</span>&nbsp;
        <select name="lands" id="lands">
          <option value="all">All</option>
          <option value="commercial">Commercial</option>
          <option value="residential">Residential</option>
        </select>
      </div>
      <div className="projects">
        {projects.map((x) => {
          return (
            <div key={x.id} className="grids">
              <img src={x.img} alt="" />
              <strong className="d-block m-0 p-3">{x.text}</strong>
              <Link>view More</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
