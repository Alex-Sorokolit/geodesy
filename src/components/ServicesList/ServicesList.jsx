import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./ServicesList.css";

const ServicesList = ({ data }) => {
  return (
    <ul className="cardSet">
      {data.map((item) => (
        <li key={item.title} className="cardSetItem">
          <ServicesCard seiviceItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
