import React from "react";
import "./ServiceCard.css";

const ServicesCard = ({ seiviceItem }) => {
  return (
    <div serviceCard>
      {/* <img src='#' alt=''></img> */}
      <p className="serviceTitle">{seiviceItem.title}</p>
      <p className="serviceDescription">{seiviceItem.description}</p>
    </div>
  );
};

export default ServicesCard;
