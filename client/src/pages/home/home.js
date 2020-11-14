import React from "react";

import MainLayout from "../../layout/main-layout/main-layout";
import SidebarLayout from "../../layout/sidebar-layout/sidebar-layout";
import Navbar from "../../components/navbar/navbar";

import NewPost from "../../components/new-post/new-post";

function Home(props) {
  return (
    <>
      <Navbar />
      <MainLayout sidebar>
        <NewPost />
      </MainLayout>
      <SidebarLayout>sidebar</SidebarLayout>
    </>
  );
}

export default Home;
