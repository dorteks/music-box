import {
  YourMusic,
  YourLastSongs,
  YourPlaylists,
  MainCategories,
  MusicBoxHeader,
  YourFavouriteArtist,
} from "./sidebar-components";
import { Box } from "@chakra-ui/react";

const Sidebar = () => {
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

export default Sidebar;
