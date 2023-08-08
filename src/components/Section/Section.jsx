// Секція поділяє сторінку на різні типи контенту, логічні блоки інформації
import React from "react";
import Container from "../Contaiter/Container";

const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      {children}
    </Container>
  );
};

export default Section;
