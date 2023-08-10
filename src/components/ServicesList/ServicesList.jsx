import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import css from "./ServicesList.module.css";

const ServicesList = ({ data }) => {
  return (
    <ul className={css.cardSet}>
      {data.map((item) => (
        <li key={item.id} className={css.cardSetItem}>
          <ServicesCard seiviceItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
