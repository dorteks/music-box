import { Grid } from "@chakra-ui/react";
import LayoutBody from "./body";
import LayoutSide from "./sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
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
      <LayoutSide />
      <LayoutBody>{props.children}</LayoutBody>
    </Grid>
  );
};

export default Layout;
