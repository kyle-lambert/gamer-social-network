import React from "react";
import "./sidebar-layout.scss";

function SidebarLayout({ children }) {
  return (
    <div className="sidebar-layout">
      <div className="sidebar-layout__inner">{children}</div>
    </div>
  );
}

export default SidebarLayout;
