import { Box } from "@chakra-ui/react";
import React from "react";

type props = {
  songName: any;
  songArtist: any;
};

const Song = (Props: props) => {
  return (
    <Box>
      <h1>{Props.songName}</h1>
      <h1>{Props.songArtist}</h1>
    </Box>
  );
};

export default Song;
