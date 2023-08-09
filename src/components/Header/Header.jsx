import React from "react";
import css from "./Header.module.css";
import Container from "../Contaiter/Container";
import logo from "../../images/Triangle.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <div className={css.header}>
      <Container>
        <nav className={css.navigation}>
          <img src={logo} className={css.headerLogo} alt="logo" />
          <Menu />
        </nav>
      </Container>
    </div>
  );
};

export default Header;
