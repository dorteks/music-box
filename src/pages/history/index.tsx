import Layout from "@/layouts/main";
import { Box } from "@chakra-ui/react";
import React from "react";
import DesktopHistory from "./desktopHistory";
import MobileHistory from "./mobileHistory";

const History = () => {
  return (
    <Box>
      <MobileHistory />
      <DesktopHistory />
    </Box>
  );
};

export default History;

History.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
