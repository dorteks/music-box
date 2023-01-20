import {
  Box,
  Card,
  HStack,
  Img,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { BiRepeat } from "react-icons/bi";
import { BsShuffle, BsSuitHeart, BsThreeDots } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { GrShareOption } from "react-icons/gr";
import { MdGraphicEq } from "react-icons/md";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { SlControlPlay } from "react-icons/sl";

const PlayOnScreen = () => {
  return (
    <Box width="full">
      <Card width="full" height="100px" bgColor="blackAlpha.400">
        <HStack justify="space-evenly">
          <Box>
            <Img boxSize="80px" bgColor="white" />
          </Box>

          <VStack width="700px">
            <HStack width="350px" justify="space-between">
              <BsShuffle size="30px" />
              <RxTrackPrevious size="30px" />
              {/* <SlControlPause size="30px" /> */}
              <SlControlPlay size="30px" />
              <RxTrackNext size="30px" />
              <BiRepeat size="30px" />
            </HStack>
            <Box pt="10px">
              <Slider width="700px" defaultValue={30}>
                <SliderTrack bg="red.100">
                  <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="tomato" as={MdGraphicEq} />
                </SliderThumb>
              </Slider>
            </Box>
          </VStack>

          <Box>
            <Stack direction="row" align="center" pr="40px" gap={5}>
              <BsSuitHeart size="30px" />
              <GrShareOption size="30px" />
              <BsThreeDots size="30px" />
              <FiDownload size="30px" />
            </Stack>
          </Box>
        </HStack>
      </Card>
    </Box>
  );
};

export default PlayOnScreen;
