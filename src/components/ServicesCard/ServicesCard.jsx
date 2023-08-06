import React from "react";
import "./ServiceCard.css";
import defaultImage from "../../images/Photo_Service_Mob.jpg";

const ServicesCard = ({
  seiviceItem: { title, description, imageUrl = defaultImage },
}) => {
  return (
    <div className="serviceCard">
      <img
        className="serviceImage"
        src={imageUrl}
        alt={title}
        width={208}
      ></img>
      <div className="serviceText">
        <p className="serviceTitle">{title}</p>
        <p className="serviceDescription">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
