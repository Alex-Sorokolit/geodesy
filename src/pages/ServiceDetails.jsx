import React from "react";
// Навігація по сайту
import { useParams, useLocation } from "react-router-dom";
// Дані
import { getServiseById } from "../fakeAPI";
// Компоненти
import Section from "../components/Section/Section";
import defaultImage from "../images/Photo_Service_Mob.jpg";
import BackButton from "../components/BackButton/BackButton";

const ServiceDetails = () => {
  const { id } = useParams();

  // Запит по дані
  const service = getServiseById(id);
  // console.log(service);

  // Звідки ми прийшли на цю сторінку
  const location = useLocation();
  // якщо невідомо звідки прийшли то повертаємось у список послуг
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Section>
      <BackButton backLinkHref={backLinkHref}>Повернутись</BackButton>
      {/* <Link to={backLinkHref}>Back to services</Link> */}
      {service.url ? (
        <img
          // className={css.portfolioImage}
          src={service.imageUrl}
          alt={service.title}
          // width={208}
        ></img>
      ) : (
        <img
          // className={css.portfolioImage}
          src={defaultImage}
          alt={service.title}
          // width={208}
        ></img>
      )}
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      {service.metodology && <p>{service.metodology}</p>}
    </Section>
  );
};

export default ServiceDetails;
