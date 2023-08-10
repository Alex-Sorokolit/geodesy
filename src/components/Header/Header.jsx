import React from "react";
import css from "./Header.module.css";
import Container from "../Contaiter/Container";
import logo from "../../images/Triangle.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <Container>
      <div className={css.header}>
        <img src={logo} className={css.headerLogo} alt="logo" />
        <Menu />
      </div>
    </Container>
  );
};

export default Header;
