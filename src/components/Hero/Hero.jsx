import React from "react";
import Section from "../Section/Section";
import css from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={css.heroWrapper}>
      <Section>
        <h1 className={css.heroTitle}>Геодезичні вимірювання</h1>
        <p className={css.heroDescription}>
          Професійне виконання геодезичних вимірювань, ділянки, котловану,
          будинку чи конструкції.
        </p>
        <p className={css.heroDescription}>
          Професійне виконання геодезичних вимірювань, ділянки, котловану,
          будинку чи конструкції.
        </p>
      </Section>
    </div>
  );
};

export default Hero;
