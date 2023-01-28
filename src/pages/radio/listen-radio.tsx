import {
  Img,
  Card,
  Text,
  Stack,
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import Layout from "@/layouts/main";
import { BsStar } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import React, { ReactElement } from "react";
import { SlControlPlay } from "react-icons/sl";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

const ListenRadio = () => {
  return (
    <Stack>
      {[
        { id: 1, radioStationName: "The Beat 99.9 FM", durationOn: "00:52" },
      ].map((item) => {
        return (
          <Stack
            key={item.id}
            height="90vh"
            alignSelf="center"
            alignItems="center"
          >
            <Card
              mt="80px"
              boxSize={["200px", "250px", "250px", "250px", "250px"]}
              p="50px"
            >
              <Img
                boxSize={["150px", "200px", "200px", "200px", "200px"]}
                src="/images/beatfm.jpeg"
              />
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
              width={["180px", "250px", "250px", "250px", "250px"]}
              justify="space-between"
              direction="row"
            >
              <BsStar size="30px" />
              <MdTimer size="30px" />
            </Stack>
            <HStack
              width={["250px", "350px", "350px", "350px", "350px"]}
              justify="space-between"
              pt="80px"
            >
              <RxTrackPrevious size="30px" />
              {/* <SlControlPause size="30px" /> */}

              <SlControlPlay size="30px" />
              <RxTrackNext size="30px" />
            </HStack>
          </Stack>
        );
      })}
    </Stack>
  );
};

ListenRadio.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ListenRadio;
