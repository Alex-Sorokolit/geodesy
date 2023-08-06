import React from "react";
import Section from "../Section/Section";
import servicesData from "../../services.json";
import ServicesList from "../ServicesList/ServicesList";

const Services = () => {
  return (
    <Section title="Види робіт">
      <ServicesList data={servicesData} />
    </Section>
  );
};

export default Services;
