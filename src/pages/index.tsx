import React, { ReactElement } from "react";
import Layout from "@/layouts/main";
import HomeContainer from "@/container/home";
import { Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Heading>
        <title>Music Box</title>
      </Heading>
      <HomeContainer />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
