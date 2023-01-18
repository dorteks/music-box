import React, { ReactElement } from "react";
import HomePage from "@/container/home";
import LayoutBody from "@/layouts/main/body";

const Home = () => {
  return <HomePage />;
};

Home.getLayout = (page: ReactElement) => {
  return <LayoutBody>{page}</LayoutBody>;
};

export default Home;
