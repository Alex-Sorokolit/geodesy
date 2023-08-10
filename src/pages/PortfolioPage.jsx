import React from "react";
import Portfolio from "../components/Portfolio/Portfolio";
import Section from "../components/Section/Section";

const PortfolioPage = () => {
  return (
    <>
      <Section>
        <p>Фільтр</p>
      </Section>
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
