import React from "react";
import "./Header.css";
import Container from "../Contaiter/Container";
import logo from "../../images/hamburger.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <nav className="navigation">
          <img src={logo} className="header-logo" alt="logo" />
          <Menu />
        </nav>
      </Container>
    </div>
  );
};

export default Header;
