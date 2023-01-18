import {
  YourMusic,
  YourLastSongs,
  YourPlaylists,
  MainCategories,
  YourFavouriteArtist,
  MusicBoxHeader,
} from "./sidebarreusables";
import { Box } from "@chakra-ui/react";

const SidebarComponents = () => {
  return (
    <Box>
      <MusicBoxHeader />
      <MainCategories />
      <YourMusic />
      <YourPlaylists />
      <YourFavouriteArtist />
      <YourLastSongs />
    </Box>
  );
};

export default SidebarComponents;