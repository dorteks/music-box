import { Box } from "@chakra-ui/react";
import ExploreMusic from "./homepage/exploreMusic";
import LatestNews from "./homepage/latestNews";
import MoodsAndGenres from "./homepage/moodsAndGenres";
import MoreToExplore from "./homepage/moreToExplore";
import MusicRadioShows from "./homepage/musicRadioShows";
import RecommendedAlbums from "./homepage/recommendedAlbums";

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
