import React from "react";
import Topbar from "@/components/topbar";
import { GridItem, Stack } from "@chakra-ui/react";
// import PlayOnScreen from "@/pages/play-on-screen";

type Props = {
  children: React.ReactNode;
};

const LayoutBody = (props: Props) => {
  return (
    <GridItem bgColor="white">
      <Topbar />
      <Stack direction="column" bgColor="whitesmoke">
        {props.children}
      </Stack>
      {/* <PlayOnScreen /> */}
    </GridItem>
  );
};

export default LayoutBody;
