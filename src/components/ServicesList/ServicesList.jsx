import React from "react";
// Навігація по сайту
import { Link, useLocation } from "react-router-dom";
// Компоненти
import ServicesCard from "../ServicesCard/ServicesCard";
import css from "./ServicesList.module.css";

const ServicesList = ({ data }) => {
  const location = useLocation();

  return (
    <ul className={css.cardSet}>
      {data.map((item) => (
        <li key={item.id} className={css.cardSetItem}>
          <Link to={`${item.id}`} state={{ from: location }}>
            <ServicesCard seiviceItem={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
