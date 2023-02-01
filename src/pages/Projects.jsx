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
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/Projects.css";
import { useParams } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";
const projects = [
  {
    id: 1,
    images: [img1, img2, img3],
    title: "Welcome to Cedar Court Estate Idu",
    text: "Our Cedar Court Estate Idu offers   opulence and tranquillity, the estate is strategically located just 2 minutes from the Idu train station, 20 minutes from Nnamdi Azikiwe international airport, 8 minutes from Citec Mbora and less than 20 minutes to Wuse 2. Neighbouring estates are NIMC estate, CRD estate and Army estate. Idu is a high brow area and its value is set to skyrocket in the next few years due to the huge presence of government investments in the area. Investing in Cedar Court estate Idu will undoubtedly be one of your best investments in 2023!",
    features: [
      "Perimeter fence",
      "Good drainage system",
      "Interlocked roads",
      "CCTV cameras",
      "Recreational facility",
      "Central Generator",
      "Street lights",
      "24 hrs security",
    ],
  },
  {
    id: 2,
    images: [img4, img5, img6],
    title: "Welcome to Frazer Court Zuba along Kubwa expressway",
    text: "Frazer Court is know for it's beautiful scenery and landscaping Frazer court is directly off the Kubwa expressway which leads to Katampe and Maitama, making the estate strategically located. With very close proximity to amenities Frazer Court will be one of the best investments in 2023!",
    features: [
      "Perimeter fence",
      "Good drainage system",
      "Interlocked roads",
      "CCTV cameras",
      "Recreational facility",
      "Central Generator",
      "Street lights",
      "24 hrs security",
    ],
  },
  {
    id: 3,
    images: [img7, img8, img9],
    title: "Welcome to Juniper Court Kurudu",
    text: "Juniper Court Estate is known for its serenity and tranquillity.The area is highly developed and in close proximity with shopping centres, restaurants, markets and good schools. With an ever increasing population in the area, Juniper Court makes an ideal investments for would-be homeowners and investors from Nigeria and the diaspora. With good access roads our subscribers are always within reach of the local amenities and feature   .The value of Kurudu is set to skyrocket with the completion of the Karshi-Apo-Ara road which will serve as a quick alternative to Abuja city central, making this a highly profitable investment.",
    features: [
      "Perimeter fence",
      "Good drainage system",
      "Interlocked roads",
      "CCTV cameras",
      "Recreational facility",
      "Central Generator",
      "Street lights",
      "24 hrs security",
    ],
  },
  {
    id: 4,
    images: [img10, img11, img12],
    title: "Welcome to Magnolia Court Estate Kyami",
    text: "Magnolia Court Estate offers luxury and comfort to its residents Located directly off the airport road , Umaru Yar'adua expressway, it is Less than 8 minutes to the Nnamdi Azikiwe international airport and directly opposite the centenary city. Centenary City is a master plan development as part of Nigeria's vision to create the city of the future,along the same lines as Dubai, Monaco and Singapore, making it an extremely profitable investment. Kyami is currently one of the most sought after locations within the FCT, With a huge government allocated budget for infrastructure, Kyami district will undoubtedly be one of the best locations to reside in the world! ",
    features: [
      "Perimeter fence",
      "Good drainage system",
      "Interlocked roads",
      "CCTV cameras",
      "Recreational facility",
      "Central Generator",
      "Street lights",
      "24 hrs security",
    ],
  },
  {
    id: 5,
    images: [img13, img14, img15],
    title: "Welcome to Medina Court Estate Jikwoyi",
    text: "Our Medina Court Estate is strategically located directly off the Nyanyan major expressway making it easily accessible to the local amenities in the area. The area is highly developed with a large and ever growing population, making it an ideal investment for rental income. The value of Jikwoyi is set to skyrocket with the completion of the Karshi-Apo-Ara road which will serve as a quick alternative to Abuja city central.",
    features: [
      "Perimeter fence",
      "Good drainage system",
      "Interlocked roads",
      "CCTV cameras",
      "Recreational facility",
      "Central Generator",
      "Street lights",
      "24 hrs security",
    ],
  },
];

const Projects = () => {
  const params = useParams();
  console.log(params.project);

  const options = {
    loop: true,
    nav: true,
    margin: 10,
    navText: ["&#x2770;", "&#x2771;"],
    autoplay: true,
    autoplayTimeout: 3000,
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
    <div className="project-cont">
      <ScrollToTop />
      <div className="">
        {params.project === "cedar_court" ? (
          <>
            {projects
              .filter((x) => x.title === "Welcome to Cedar Court Estate Idu")
              .map((x, index) => (
                <div key={index}>
                  <h3 className="pb-4 text-center">{x.title}</h3>
                  <OwlCarousel className="owl-theme" {...options}>
                    {x.images.map((x, index) => {
                      return (
                        <div className="item" key={index}>
                          <img
                            src={x}
                            alt=""
                            style={{
                              filter: "brightness(100%)",
                            }}
                          />
                        </div>
                      );
                    })}
                  </OwlCarousel>
                  <p className="d-block m-0 py-4">{x.text}</p>
                  <ul className="p-0">
                    <h4>Estate features included are:</h4>
                    {x.features.map((x, index) => (
                      <li key={index}>
                        <>
                          <GiCheckMark />
                          &nbsp;&nbsp;&nbsp;{x}
                        </>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </>
        ) : params.project === "frazer_court" ? (
          <>
            {projects
              .filter(
                (x) =>
                  x.title ===
                  "Welcome to Frazer Court Zuba along Kubwa expressway"
              )
              .map((x, index) => (
                <div key={index}>
                  <h3 className="pb-4 text-center">{x.title}</h3>
                  <OwlCarousel className="owl-theme" {...options}>
                    {x.images.map((x, index) => {
                      return (
                        <div className="item" key={index}>
                          <img
                            src={x}
                            alt=""
                            style={{
                              filter: "brightness(100%)",
                            }}
                          />
                        </div>
                      );
                    })}
                  </OwlCarousel>
                  <p className="d-block m-0 py-4">{x.text}</p>
                  <ul className="p-0">
                    <h4>Estate features included are:</h4>
                    {x.features.map((x, index) => (
                      <li key={index}>
                        <>
                          <GiCheckMark />
                          &nbsp;&nbsp;&nbsp;{x}
                        </>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </>
        ) : params.project === "juniper_court" ? (
          <>
            {projects
              .filter((x) => x.title === "Welcome to Juniper Court Kurudu")
              .map((x, index) => (
                <div key={index}>
                  <h3 className="pb-4 text-center">{x.title}</h3>
                  <OwlCarousel className="owl-theme" {...options}>
                    {x.images.map((x, index) => {
                      return (
                        <div className="item" key={index}>
                          <img
                            src={x}
                            alt=""
                            style={{
                              filter: "brightness(100%)",
                            }}
                          />
                        </div>
                      );
                    })}
                  </OwlCarousel>
                  <p className="d-block m-0 py-4">{x.text}</p>
                  <ul className="p-0">
                    <h4>Estate features included are:</h4>
                    {x.features.map((x, index) => (
                      <li key={index}>
                        <>
                          <GiCheckMark />
                          &nbsp;&nbsp;&nbsp;{x}
                        </>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </>
        ) : params.project === "magnolia_court" ? (
          <>
            {projects
              .filter(
                (x) => x.title === "Welcome to Magnolia Court Estate Kyami"
              )
              .map((x, index) => (
                <div key={index}>
                  <h3 className="pb-4 text-center">{x.title}</h3>
                  <OwlCarousel className="owl-theme" {...options}>
                    {x.images.map((x, index) => {
                      return (
                        <div className="item" key={index}>
                          <img
                            src={x}
                            alt=""
                            style={{
                              filter: "brightness(100%)",
                            }}
                          />
                        </div>
                      );
                    })}
                  </OwlCarousel>
                  <p className="d-block m-0 py-4">{x.text}</p>
                  <ul className="p-0">
                    <h4>Estate features included are:</h4>
                    {x.features.map((x, index) => (
                      <li key={index}>
                        <>
                          <GiCheckMark />
                          &nbsp;&nbsp;&nbsp;{x}
                        </>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </>
        ) : params.project === "medina_court" ? (
          <>
            {projects
              .filter(
                (x) => x.title === "Welcome to Medina Court Estate Jikwoyi"
              )
              .map((x, index) => (
                <div key={index}>
                  <h3 className="pb-4 text-center">{x.title}</h3>
                  <OwlCarousel className="owl-theme" {...options}>
                    {x.images.map((x, index) => {
                      return (
                        <div className="item" key={index}>
                          <img
                            src={x}
                            alt=""
                            style={{
                              filter: "brightness(100%)",
                            }}
                          />
                        </div>
                      );
                    })}
                  </OwlCarousel>
                  <p className="d-block m-0 py-4">{x.text}</p>
                  <ul className="p-0">
                    <h4>Estate features included are:</h4>
                    {x.features.map((x, index) => (
                      <li key={index}>
                        <>
                          <GiCheckMark />
                          &nbsp;&nbsp;&nbsp;{x}
                        </>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Projects;
