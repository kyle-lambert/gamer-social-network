import React from "react";
import "./dashboard.scss";

import Navbar from "../../components/navbar/navbar";

function Dashboard({ children }) {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard__main">{children}</div>
    </div>
  );
}

export default Dashboard;
