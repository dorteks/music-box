import { Box } from "@chakra-ui/react";
import ExploreMusic from "./exploreMusic";
import LatestNews from "./latestNews";
import MoodsAndGenres from "./moodsAndGenres";
import MoreToExplore from "./moreToExplore";
import MusicRadioShows from "./musicRadioShows";
import RecommendedAlbums from "./recommendedAlbums";

const Body = () => {
  return (
    <Box
      pl={["15px", "30px", "30px", "40px", "60px"]}
      pr={["15px", "30px", "30px", "40px", "60px"]}
      maxWidth={["100vw", "100vw", "100vw", "82vw", "85vw"]}
    >
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
