import Topbar from "@/components/topbar";
import { GridItem, Stack } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutBody = (props: Props) => {
  return (
    <GridItem bgColor="white">
      <Topbar />
      <Stack direction="column">{props.children}</Stack>
    </GridItem>
  );
};

export default LayoutBody;
