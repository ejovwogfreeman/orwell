import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import img from "../assets/house1.jpg";
import "../css/Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    img: img,
    text: "Bentford city",
  },
  {
    id: 2,
    img: img,
    text: "Bentford city",
  },
  {
    id: 3,
    img: img,
    text: "Bentford city",
  },
  {
    id: 4,
    img: img,
    text: "Bentford city",
  },
  {
    id: 5,
    img: img,
    text: "Bentford city",
  },
  {
    id: 6,
    img: img,
    text: "Bentford city",
  },
  {
    id: 7,
    img: img,
    text: "Bentford city",
  },
  {
    id: 8,
    img: img,
    text: "Bentford city",
  },
  {
    id: 9,
    img: img,
    text: "Bentford city",
  },
];

const Projects = () => {
  return (
    <div className="project-cont">
      <ScrollToTop />
      <p className="display-5 text-center pb-3">Projects</p>
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
