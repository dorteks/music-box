import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsPlayCircleFill,
} from "react-icons/bs";
import { RxRadiobutton } from "react-icons/rx";

const MusicRadioShows = () => {
  return (
    <Box pt="50px" pb="50px">
      <Stack direction="row" alignItems="center" justify="space-between">
        <HStack>
          <Box pt="3px" pb="3px">
            <RxRadiobutton size="20px" />
          </Box>
          <Text
            p="5px"
            color="gray.700"
            fontWeight="bold"
            textAlign="center"
            fontSize="16px"
          >
            Music Radio Shows
          </Text>
        </HStack>
        <HStack gap={3}>
          <BsArrowLeftCircle size="35px" />
          <BsArrowRightCircle size="35px" />
        </HStack>
      </Stack>

      <HStack mt="30px" gap={3} overflowX="scroll">
        {[
          {
            image: "/images/DojaCat.png",
            radioName: "Radio with Carley Pierce",
          },
          {
            image: "/images/DojaCat.png",
            radioName: "Glydezone Radio with Funk",
          },
          {
            image: "/images/DojaCat.png",
            radioName: "The New Australia Radio",
          },
          {
            image: "/images/DojaCat.png",
            radioName: "Everything together Radio",
          },
          {
            image: "/images/DojaCat.png",
            radioName: "Glydezone Radio with Funk",
          },
          {
            image: "/images/DojaCat.png",
            radioName: "The New Australia Radio",
          },
          {
            image: "/images/DojaCat.png",
            radioName: "Everything together Radio",
          },
        ].map((item) => {
          return (
            <Box key="musicRadioShows">
              <Card minWidth="220px" h="180px" backgroundImage={item.image}>
                <Box w="40px" mt="20px" ml="20px">
                  <BsPlayCircleFill size="sm" />
                </Box>
              </Card>

              <Text mt="20px" mb="20px" fontSize="14px" fontWeight="bold">
                {item.radioName}
              </Text>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};

export default MusicRadioShows;
