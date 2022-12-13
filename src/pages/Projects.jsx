import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import img1 from "../assets/house1.jpg";
import img2 from "../assets/house2.jpg";
import img3 from "../assets/house3.jpg";
import "../css/Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    img: img1,
    text: "Bentford city",
  },
  {
    id: 2,
    img: img2,
    text: "Bentford city",
  },
  {
    id: 3,
    img: img3,
    text: "Bentford city",
  },
  {
    id: 4,
    img: img2,
    text: "Bentford city",
  },
  {
    id: 5,
    img: img3,
    text: "Bentford city",
  },
  {
    id: 6,
    img: img1,
    text: "Bentford city",
  },
  {
    id: 7,
    img: img3,
    text: "Bentford city",
  },
  {
    id: 8,
    img: img1,
    text: "Bentford city",
  },
  {
    id: 9,
    img: img2,
    text: "Bentford city",
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
