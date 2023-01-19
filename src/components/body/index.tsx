import { Box } from "@chakra-ui/react";
import ExploreMusic from "./exploreMusic";
import LatestNews from "./latestNews";
import MoodsAndGenres from "./moodsAndGenres";
import MoreToExplore from "./moreToExplore";
import MusicRadioShows from "./musicRadioShows";
import RecommendedAlbums from "./recommendedAlbums";

const Body = () => {
  return (
    <Box pl="60px" pr="60px">
      <ExploreMusic />
      <RecommendedAlbums />
      <LatestNews />
      <MoodsAndGenres />
      <MusicRadioShows />
      <MoreToExplore />
    </Box>
  );
};

export default Body;
