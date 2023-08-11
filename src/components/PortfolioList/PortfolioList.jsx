import React from "react";
// Навігація по сайту
import { Link, useLocation } from "react-router-dom";
// Компоненти
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import css from "./PortfolioList.module.css";

const PortfolioList = ({ data }) => {
  const location = useLocation();

  // Якщо ми переходимо із сторінки portfolio то до шляхо додати тільки :id, якщо з іншої сторінки то додати portfolio/:id
  const goTo = location.pathname === "/portfolio" ? "" : "portfolio/";

  return (
    <ul className={css.portfolioSet}>
      {data.map((item) => (
        <li key={item.id} className={css.portfolioSetItem}>
          <Link to={`${goTo}${item.id}`} state={{ from: location }}>
            <PortfolioCard portfolioItem={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
