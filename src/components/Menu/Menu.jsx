import React from "react";
import css from "./Menu.module.css";
const Menu = () => {
  return (
    <ul className={css.menu}>
      <li className={css.menuItem}>
        <a href="#">Головна</a>
      </li>
      <li className={css.menuItem}>
        <a href="#">Послуги</a>
      </li>
      <li className={css.menuItem}>
        <a href="#">Портфоліо</a>
      </li>
      <li className={css.menuItem}>
        <a href="#">Контакти</a>
      </li>
    </ul>
  );
};

export default Menu;
