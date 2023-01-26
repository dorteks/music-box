import Layout from "@/layouts/main";
import { Box } from "@chakra-ui/react";
import React from "react";
import DesktopFavourite from "./desktopFavourite";
import MobileFavourite from "./mobileFavourite";

const Favourite = () => {
  return (
    <Box>
      <MobileFavourite />
      <DesktopFavourite />
    </Box>
  );
};

export default Favourite;

Favourite.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
