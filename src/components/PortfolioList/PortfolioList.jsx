import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./PortfolioList.css";

const PortfolioList = ({ data }) => {
  console.log(data);
  return (
    <ul className="portfolioSet">
      {data.map((item) => (
        <li key={item.title} className="portfolioSetItem">
          <PortfolioCard portfolioItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
