import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Slider from "../components/Slider";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Section />
      <Slider />
    </div>
  );
};

export default Home;
