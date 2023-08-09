import React from "react";
import Section from "../Section/Section";
import css from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={css.heroBG}>
      <Section>
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>Геодезичні вимірювання</h1>
          <p className={css.heroDescription}>
            Професійне виконання геодезичних вимірювань, ділянки, котловану,
            будинку чи конструкції.
          </p>
          <p className={css.heroDescription}>
            Аналіз поверхонь. Підрахунок об’ємів. Визначення відхилень.
            Оформлення виконавчої документації.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
