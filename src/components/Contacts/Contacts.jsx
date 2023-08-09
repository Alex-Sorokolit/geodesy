import React from "react";
import Section from "../Section/Section";
import css from "./Contacts.module.css";
import { MdEmail, MdPhone } from "react-icons/md";

const Contacts = () => {
  return (
    <Section title="Контакти">
      <ul className={css.contactsList}>
        <li className={css.contactsItem}>
          <a href="mailto:sorokolital@gmail.com" className={css.contactsItem}>
            <MdEmail className={css.contactsIcon} />
            sorokolital@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+380980145051" className={css.contactsItem}>
            <MdPhone className={css.contactsIcon} />
            +380980145051
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default Contacts;
