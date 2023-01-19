import { Box } from "@chakra-ui/react";
import ExploreMusic from "./exploreMusic";
import LatestNews from "./latestNews";
import MoodsAndGenres from "./moodsAndGenres";
import RecommendedAlbums from "./recommendedAlbums";

const Body = () => {
  return (
    <Box pl="60px" pr="60px">
      <ExploreMusic />
      <RecommendedAlbums />
      <LatestNews />
      <MoodsAndGenres />
    </Box>
  );
};

export default Body;
