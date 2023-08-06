import React from "react";
import defaultImage from "../../images/Photo_Service_Mob.jpg";
import "./PortfolioCard.css";

const PortfolioCard = ({
  portfolioItem: { title, imageUrl = defaultImage },
}) => {
  return (
    <div className="portfolioCard">
      <img
        className="portfolioImage"
        src={imageUrl}
        alt={title}
        width={208}
      ></img>
      <div className="portfolioText">
        <p className="portfolioTitle">{title}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
