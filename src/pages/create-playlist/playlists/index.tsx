import Layout from "@/layouts/main";
import { Box } from "@chakra-ui/react";
import React from "react";
import DesktopPlaylists from "./desktopPlaylists";
import MobilePLaylist from "./mobilePlaylist";

const Playlists = () => {
  return (
    <Box>
      <MobilePLaylist />
      <DesktopPlaylists />
    </Box>
  );
};

export default Playlists;

Playlists.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
