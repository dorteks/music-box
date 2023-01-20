import {
  Box,
  Card,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CiPlay1 } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { IoHeadsetOutline } from "react-icons/io5";

const Radio = () => {
  return (
    <Box pl="20px" pt="30px">
      <HStack pb="40px" gap="5">
        {[
          {
            radioStationImage: "/images/radio4.jpg",
          },
          {
            radioStationImage: "/images/radio4.jpg",
          },
          {
            radioStationImage: "/images/radio4.jpg",
          },
          {
            radioStationImage: "/images/radio4.jpg",
          },
          {
            radioStationImage: "/images/radio4.jpg",
          },
        ].map((item) => {
          return (
            <Stack key="radioStationName" direction="column" pt="20px">
              <Card width="240px" height="250px" bgColor="blackAlpha.500">
                <Card
                  mt="10px"
                  ml="10px"
                  width="200px"
                  height="200px"
                  bgImage={item.radioStationImage}
                >
                  {/* <Box alignSelf="end" mr="20px" mt="160px">
                  <CiPlay1 size="30px" />
                </Box> */}
                </Card>
              </Card>
            </Stack>
          );
        })}
      </HStack>

      <Stack>
        {[
          {
            radioStationName: "The Beat 99.9 FM",
            genres: "sports.entertainment.news.music",
          },
        ].map((item) => {
          return (
            <Card
              key="radioStationName"
              width="1100px"
              height="300px"
              bgColor="red.50"
            >
              <Box
                width="1100px"
                height="25px"
                bgImage="/images/wave.jpeg"
                bgColor="red.50"
              />
              <Stack direction="row">
                <Img
                  boxSize="275px"
                  width="300px"
                  src="images/headphone.jpeg"
                />
                <VStack pl="175px" pr="50px" align="left" justify="center">
                  <HStack>
                    <Heading size="lg" pr="20px">
                      {item.radioStationName}
                    </Heading>

                    <FiBarChart2 size="25px" />
                  </HStack>
                  <Text pt="20px" fontSize="16px">
                    {item.genres}
                  </Text>
                </VStack>
                <Box
                  p="15px"
                  ml="50px"
                  boxSize="80px"
                  alignSelf="center"
                  borderRadius="40px"
                  bgColor="blackAlpha.400"
                >
                  <CiPlay1 size="50px" />
                </Box>
              </Stack>
            </Card>
          );
        })}
      </Stack>

      <HStack gap="5">
        {[
          {
            radioStationImage: "/images/radio2.jpeg",
            radioStationName: "Real 99.1FM Aba",
          },
          {
            radioStationImage: "/images/radio2.jpeg",
            radioStationName: "THe beat 99.9 FM",
          },
          {
            radioStationImage: "/images/radio2.jpeg",
            radioStationName: "Fresh 105.9FM",
          },
          {
            radioStationImage: "/images/radio2.jpeg",
            radioStationName: "Gospel FM Awka",
          },
          {
            radioStationImage: "/images/radio2.jpeg",
            radioStationName: "Domi Radio",
          },
          {
            radioStationImage: "/images/radio2.jpeg",
            radioStationName: "Lagos Talks 91.3FM",
          },
        ].map((item) => {
          return (
            <Stack key="radioStationName" direction="column" pt="20px">
              <Card
                width="200px"
                height="200px"
                bgImage={item.radioStationImage}
              >
                <Box
                  alignSelf="end"
                  mt="10px"
                  mr="20px"
                  p="5px"
                  boxSize="40px"
                  borderRadius="10px"
                  bgColor="white"
                >
                  <CiPlay1 size="30px" />
                </Box>
              </Card>
              <Text textAlign="left"> {item.radioStationName} </Text>
            </Stack>
          );
        })}
      </HStack>

      <Stack mt="40px">
        <Heading size="sm">Selected radio stations for you</Heading>

        {[
          { radioStationName: "560 Power Country", likes: "57.0", unit: "K" },
          { radioStationName: "560 Smooth Jazz", likes: "40.0", unit: "K" },
          { radioStationName: "Real 99.1 FM Aba", likes: "748.0", unit: "K" },
          { radioStationName: "560 Power Country", likes: "2.0", unit: "M" },
        ].map((item) => {
          return (
            <Stack
              key="radioStationName"
              w="1100px"
              direction="row"
              pt="20px"
              pl="30px"
              justify="space-between"
            >
              <HStack>
                <Card
                  width="100px"
                  height="100px"
                  bgImage="/images/radio2.jpeg"
                ></Card>
                <Stack pl="30px" direction="column" justify="space-evenly">
                  <Text> {item.radioStationName} </Text>
                  <HStack>
                    <IoHeadsetOutline />
                    <Text>
                      {item.likes} {item.unit}
                    </Text>
                  </HStack>
                </Stack>
              </HStack>

              <Box
                p="15px"
                boxSize="80px"
                alignSelf="center"
                borderRadius="40px"
                bgColor="blackAlpha.400"
              >
                <CiPlay1 size="50px" />
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Radio;
