import React from "react";
// Навігація по сайту
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Компоненти
import Header from "../components/Header/Header";
// import Contacts from "../components/Contacts/Contacts";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      {/* <Contacts /> */}
    </div>
  );
};

export default SharedLayout;
