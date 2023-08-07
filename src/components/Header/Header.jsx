import React from "react";
import "./Header.css";
import Container from "../Contaiter/Container";
import logo from "../../images/Triangle.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <nav className="navigation">
          <img src={logo} className="headerLogo" alt="logo" />
          <Menu />
        </nav>
      </Container>
    </div>
  );
};

export default Header;
