import React from "react";
import css from "./Menu.module.css";
// Навігація по сайту
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.menuItem}>
        Головна
      </NavLink>
      <NavLink to="/services" className={css.menuItem}>
        Послуги
      </NavLink>
      <NavLink to="/portfolio" className={css.menuItem}>
        Портфоліо
      </NavLink>
      <NavLink to="/contacts" className={css.menuItem}>
        Контакти
      </NavLink>
    </nav>
  );
};

export default Menu;
