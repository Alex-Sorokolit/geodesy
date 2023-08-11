import React from "react";
// Навігація по сайту
import { useParams, useLocation } from "react-router-dom";
// Запит даних одного портфоліо
import { getPortfolioById } from "../fakeAPI";
// Компоненти
import Section from "../components/Section/Section";
import defaultImage from "../images/Photo_Service_Mob.jpg";
import BackButton from "../components/BackButton/BackButton";

const PortfolioDetails = () => {
  // Отримуємо id із рядка url
  const { id } = useParams();

  // Запит по дані (потім тут будуть відфільтровані дані)
  const portfolioData = getPortfolioById(id);
  console.log(portfolioData);

  // Звідк ми прийшли на цю сторінку
  const location = useLocation();
  // якщо невідомо звідки прийшли то повертаємось на головну
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Section>
      <BackButton backLinkHref={backLinkHref}>Повернутись</BackButton>
      {portfolioData.imgUrls ? (
        <img
          // className={css.portfolioImage}
          src={portfolioData.imgUrls}
          alt={portfolioData.title}
          // width={208}
        ></img>
      ) : (
        <img
          // className={css.portfolioImage}
          src={defaultImage}
          alt={portfolioData.title}
          // width={208}
        ></img>
      )}
      <h2>{portfolioData.title}</h2>
      {portfolioData.description && <p>{portfolioData.description}</p>}
    </Section>
  );
};

export default PortfolioDetails;
