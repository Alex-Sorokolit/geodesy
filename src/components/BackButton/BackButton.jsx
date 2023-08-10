import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import css from "./BackButton.module.css";

const BackButton = ({ backLinkHref, children }) => {
  return (
    <Link to={backLinkHref} className={css.backBtn}>
      <BsFillArrowLeftSquareFill />
      {children}
    </Link>
  );
};

export default BackButton;
