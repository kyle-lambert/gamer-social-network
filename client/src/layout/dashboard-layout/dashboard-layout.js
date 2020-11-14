import React from "react";
import "./dashboard-layout.scss";

import Navbar from "../../components/navbar/navbar";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-layout__main">{children}</div>
    </div>
  );
}

export default DashboardLayout;
