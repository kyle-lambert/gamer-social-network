import React from "react";

import MainLayout from "../../layout/main-layout/main-layout";
import SidebarLayout from "../../layout/sidebar-layout/sidebar-layout";
import Navbar from "../../components/navbar/navbar";

function Post(props) {
  return (
    <>
      <Navbar />
      <MainLayout sidebar>post</MainLayout>
      <SidebarLayout>sidebar</SidebarLayout>
    </>
  );
}

export default Post;
