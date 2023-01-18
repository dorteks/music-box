import React, { ReactElement } from "react";
import Layout from "@/layouts/main";
import HomeContainer from "@/container/home";

const Home = () => {
  return <HomeContainer />;
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
