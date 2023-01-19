import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsPlayCircleFill,
} from "react-icons/bs";
import { RxRadiobutton } from "react-icons/rx";

const MusicRadioShows = () => {
  return (
    <Box mt="50px" mb="50px">
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
            fontSize="18px"
          >
            Music Radio Shows
          </Text>
        </HStack>
        <HStack>
          <BsArrowLeftCircle size="35px" />
          <BsArrowRightCircle size="35px" />
        </HStack>
      </Stack>

      <HStack>
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
        ].map((item) => {
          return (
            <Box key={""}>
              <Card w="200px" h="150px" backgroundImage={item.image}>
                <Box w="40px" mt="20px" ml="20px">
                  <BsPlayCircleFill size="sm" />
                </Box>
              </Card>

              <Text mt="10px" fontSize="14px" fontWeight="bold">
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
