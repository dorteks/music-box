import {
  BsPlayCircleFill,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";
import { RxRadiobutton } from "react-icons/rx";
import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

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
            fontSize="16px"
            color="gray.700"
            fontWeight="bold"
            textAlign="center"
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
            <Link key="musicRadioShows" href="/radio/listen-radio">
              <Box>
                <Card minWidth="220px" h="180px" backgroundImage={item.image}>
                  <Box w="40px" mt="20px" ml="20px">
                    <BsPlayCircleFill size="sm" />
                  </Box>
                </Card>

                <Text mt="20px" mb="20px" fontSize="14px" fontWeight="bold">
                  {item.radioName}
                </Text>
              </Box>
            </Link>
          );
        })}
      </HStack>
    </Box>
  );
};

export default MusicRadioShows;
