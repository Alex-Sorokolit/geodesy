import React from "react";
// Навігація по сайту
import { useParams, useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  // Запит по дані
  // const product = getProductById(id);

  // Звідки ми прийшли на цю сторінку
  const location = useLocation();
  // якщо невідомо звідки прийшли то повертаємось у список послуг
  const backLinkHref = location.state?.from ?? "/services";
  return (
    <div>
      <p>Кнопка повернення на у список послуг</p>
      <p> Зображення (слайдер)</p>
      <p>Заголовок</p>
      <p>Опис послуги</p>
    </div>
  );
};

export default ServiceDetails;
