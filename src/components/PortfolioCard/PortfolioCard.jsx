import React from "react";
import defaultImage from "../../images/Photo_Service_Mob.jpg";
import css from "./PortfolioCard.module.css";

const PortfolioCard = ({
  portfolioItem: { title, imgUrls = defaultImage },
}) => {
  return (
    <div className={css.portfolioCard}>
      <img
        className={css.portfolioImage}
        src={imgUrls}
        alt={title}
        width={208}
      ></img>
      <div className={css.portfolioText}>
        <p className={css.portfolioTitle}>{title}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
