import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import css from "./PortfolioList.module.css";

const PortfolioList = ({ data }) => {
  return (
    <ul className={css.portfolioSet}>
      {data.map((item) => (
        <li key={item.id} className={css.portfolioSetItem}>
          <PortfolioCard portfolioItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
