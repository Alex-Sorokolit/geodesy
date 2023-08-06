import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <ul className="menu">
      <li className="menuItem">
        <a href="#">Головна</a>
      </li>
      <li className="menuItem">
        <a href="#">Послуги</a>
      </li>
      <li className="menuItem">
        <a href="#">Портфоліо</a>
      </li>
      <li className="menuItem">
        <a href="#">Контакти</a>
      </li>
    </ul>
  );
};

export default Menu;
