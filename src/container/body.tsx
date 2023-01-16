import React from "react";
import Topbar from "./topbar";
import MainBody from "./mainbody";
import { Stack } from "@chakra-ui/react";

const Body = () => {
  return (
    <Stack direction="column">
      <Topbar />
      <MainBody />
    </Stack>
  );
};

export default Body;
