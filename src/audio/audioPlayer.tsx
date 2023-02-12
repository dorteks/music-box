import { Box } from "@chakra-ui/react";
import React from "react";
import Pause from "./pause";
import Play from "./play";
import useAudioPlayer from "./useAudioPlayer";

type props = {
  song: string;
};

const AudioPlayer = ({ song }: props) => {
  const { playing, setPlaying } = useAudioPlayer();

  return (
    <Box>
      <audio id="audio">
        <source src={song} />
        Song probably not supported
      </audio>
      <Box>
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
      </Box>
    </Box>
  );
};

export default AudioPlayer;
