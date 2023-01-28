import { Box, Button } from "@chakra-ui/react";

const PlaySong = () => {
  const htmlaudio: HTMLAudioElement = new Audio("/tikuku.mp3");
  // console.log(htmlaudio, "htmlaudio");

  return (
    <Box>
      <Button onClick={() => htmlaudio.play()}> Play </Button>
      {/* <Button onClick={() => htmlaudio.pause()}>Pause</Button>{" "} */}
    </Box>
  );
};

export default PlaySong;
