import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li>
          <ServicesCard seiviceItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
