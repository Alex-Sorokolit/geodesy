import React from "react";
import Section from "../Section/Section";
import portfolioData from "../../portfolio.json";
import PortfolioList from "../PortfolioList/PortfolioList";

const Portfolio = () => {
  return (
    <Section title="Портфоліо">
      <PortfolioList data={portfolioData} />
    </Section>
  );
};

export default Portfolio;
