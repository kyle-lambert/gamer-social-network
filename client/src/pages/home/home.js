import React from "react";
import "./home.scss";

import Dashboard from "../../layout/dashboard/dashboard";

import PostCard from "../../components/post-card/post-card";

function Home(props) {
  return (
    <Dashboard>
      <div className="home">
        <PostCard />
      </div>
    </Dashboard>
  );
}

export default Home;
