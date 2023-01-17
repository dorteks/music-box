import Body from "./body";
import Sidebar from "./sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      minH="100vh"
      bgColor="green"
      templateColumns={[
        "0px 1fr",
        "0px 1fr",
        "0px 1fr",
        "200px 1fr",
        "230px 1fr",
      ]}
    >
      <GridItem bgColor="red">
        <Sidebar />
      </GridItem>
      <GridItem bgColor="blue">
        <Body />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
