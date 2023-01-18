import { GridItem, Stack } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutBody = (props: Props) => {
  return (
    <GridItem bgColor="blue">
      <Stack direction="column">{props.children}</Stack>
    </GridItem>
  );
};

export default LayoutBody;
