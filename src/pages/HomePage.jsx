import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import ModelViewer from "../components/ModelViewer/ModelViewer";

const HomePage = () => {
  return (
    <div>
      <ModelViewer />
      <Hero />
      <Services />
      <Portfolio />
    </div>
  );
};

export default HomePage;
