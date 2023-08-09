import React from "react";
import css from "./ServiceCard.module.css";
import defaultImage from "../../images/Photo_Service_Mob.jpg";

const ServicesCard = ({
  seiviceItem: { title, description, imageUrl = defaultImage },
}) => {
  return (
    <div className={css.serviceCard}>
      <img
        className={css.serviceImage}
        src={imageUrl}
        alt={title}
        width={208}
      ></img>
      <div className={css.serviceText}>
        <p className={css.serviceTitle}>{title}</p>
        <p className={css.serviceDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
