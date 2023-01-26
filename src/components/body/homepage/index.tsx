import LatestNews from "./latestNew";
import { Box } from "@chakra-ui/react";
import ExploreMusic from "./exploreMusic";
import MoreToExplore from "./moreToExplore";
import MoodsAndGenres from "./moodsAndGenres";
import MusicRadioShows from "./musicRadioShows";
import RecommendedAlbums from "./recommendedAlbums";

const Body = () => {
  return (
    <Box
      pl={["15px", "30px", "30px", "45px", "60px"]}
      pr={["15px", "30px", "30px", "45px", "60px"]}
      maxWidth={["100vw", "100vw", "100vw", "83vw", "84vw"]}
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
