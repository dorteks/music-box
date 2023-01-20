import {
  Button,
  Card,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsStar } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { SlControlPlay } from "react-icons/sl";

const ListenRadio = () => {
  return (
    <Stack>
      {[{ radioStationName: "The Beat 99.9 FM", durationOn: "00:52" }].map(
        (item) => {
          return (
            <Stack
              pl="20px"
              height="90vh"
              alignSelf="center"
              alignItems="center"
            >
              <Card mt="80px" boxSize="250px" p="50px">
                <Img boxSize="200px" src="/images/beatfm.jpeg" />
              </Card>
              <Heading pt="60px" size="lg">
                {item.radioStationName}
              </Heading>
              <Stack pt="30px" direction="row" align="center">
                <Text>{item.durationOn} </Text>
                <Button>Live </Button>
              </Stack>
              <Stack
                pt="30px"
                width="250px"
                justify="space-between"
                direction="row"
              >
                <BsStar size="30px" />
                <MdTimer size="30px" />
              </Stack>
              <HStack width="350px" justify="space-between" pt="80px">
                <RxTrackPrevious size="30px" />
                {/* <SlControlPause size="30px" /> */}

                <SlControlPlay size="30px" />
                <RxTrackNext size="30px" />
              </HStack>
            </Stack>
          );
        }
      )}
    </Stack>
  );
};

export default ListenRadio;
