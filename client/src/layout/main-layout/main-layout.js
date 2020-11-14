import React from "react";
import "./main-layout.scss";

function MainLayout({ children, sidebar }) {
  return (
    <div data-sidebar={sidebar ? true : false} className="main-layout">
      {children}
    </div>
  );
}

export default MainLayout;
