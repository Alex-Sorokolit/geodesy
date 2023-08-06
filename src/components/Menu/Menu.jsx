import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <a href="#">Головна</a>
      </li>
      <li className="menu-item">
        <a href="#">Послуги</a>
      </li>
      <li className="menu-item">
        <a href="#">Портфоліо</a>
      </li>
      <li className="menu-item">
        <a href="#">Контакти</a>
      </li>
    </ul>
  );
};

export default Menu;
