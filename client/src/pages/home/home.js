import React from "react";

import MainLayout from "../../layout/main-layout/main-layout";
import SidebarLayout from "../../layout/sidebar-layout/sidebar-layout";
import Navbar from "../../components/navbar/navbar";

import NewPost from "../../components/new-post/new-post";
import PostCard from "../../components/post-card/post-card";

function Home(props) {
  return (
    <>
      <Navbar />
      <MainLayout sidebar>
        <PostCard />
      </MainLayout>
      <SidebarLayout>sidebar</SidebarLayout>
    </>
  );
}

export default Home;
