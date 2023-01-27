import Layout from "@/layouts/main";
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
import Link from "next/link";
import { ReactElement } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { IoHeadsetOutline } from "react-icons/io5";

const Radio = () => {
  return (
    <Box
      pt="30px"
      pl={["20px", "20px", "30px", "20px", "30px"]}
      maxWidth={["96vw", "96vw", "96vw", "78vw", "80vw"]}
    >
      <HStack pb="40px" gap="5" overflowX="scroll">
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
            <Link key="radioStationName" href="/radio/listen-radio">
              <Stack direction="column" pt="20px">
                <Card width="240px" height="250px" bgColor="blackAlpha.500">
                  <Card
                    mt="10px"
                    ml="10px"
                    width="200px"
                    height="200px"
                    bgImage={item.radioStationImage}
                  ></Card>
                </Card>
              </Stack>
            </Link>
          );
        })}
      </HStack>

      <Stack align="center" mt="20px">
        {[
          {
            radioStationName: "The Beat 99.9 FM",
            genres: "sports.entertainment.news.music",
          },
        ].map((item) => {
          return (
            <Card
              key="radioStationName"
              width={["95vw", "95vw", "95vw", "75vw", "70vw"]}
              height={["200px", "200px", "250px", "300px", "300px"]}
              bgColor="red.50"
              justifyContent="space-around"
            >
              {/* <Box
                height="15px"
                bgImage="/images/wave.jpeg"
                bgColor="red.50"
                justifyContent="space-between"
              /> */}
              <Stack direction="row" alignContent="center">
                <Img
                  display={["none", "none", "flex", "flex", "flex"]}
                  boxSize={["150px", "200px", "200px", "200px", "250px"]}
                  width={["150px", "200px", "200px", "200px", "250px"]}
                  src="images/headphone.jpeg"
                />
                <VStack justify="center" align="left">
                  <HStack>
                    <Heading size={["sm", "md", "lg", "lg", "lg"]} pr="20px">
                      {item.radioStationName}
                    </Heading>

                    <FiBarChart2 size="25px" />
                  </HStack>
                  <Text
                    pt="20px"
                    fontSize={["12px", "12px", "16px", "16px", "16px"]}
                  >
                    {item.genres}
                  </Text>
                </VStack>
                <Box
                  p="15px"
                  ml="50px"
                  boxSize={["60px", "60px", "60px", "80px", "80px"]}
                  alignSelf="center"
                  borderRadius="40px"
                  bgColor="blackAlpha.400"
                >
                  <CiPlay1 size={["10px", "10px", "30px", "50px", "50px"]} />
                </Box>
              </Stack>
            </Card>
          );
        })}
      </Stack>

      <HStack gap="5" overflowX="scroll">
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
            <Link key="radioName" href="/radio/listen-radio">
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
            </Link>
          );
        })}
      </HStack>

      <Stack mt="40px" mb="40px">
        <Heading size="sm">Selected radio stations for you</Heading>

        {[
          { radioStationName: "560 Power Country", likes: "57.0", unit: "K" },
          { radioStationName: "560 Smooth Jazz", likes: "40.0", unit: "K" },
          { radioStationName: "Real 99.1 FM Aba", likes: "748.0", unit: "K" },
          { radioStationName: "560 Power Country", likes: "2.0", unit: "M" },
          { radioStationName: "560 Power Country", likes: "57.0", unit: "K" },
          { radioStationName: "560 Smooth Jazz", likes: "40.0", unit: "K" },
          { radioStationName: "Real 99.1 FM Aba", likes: "748.0", unit: "K" },
          { radioStationName: "560 Power Country", likes: "2.0", unit: "M" },
        ].map((item) => {
          return (
            <Link key="radioStationName" href="/radio/listen-radio">
              <Stack
                w={["90vw", "90vw", "90vw", "75vw", "78vw"]}
                direction="row"
                pt="20px"
                pl={["", "10px", "20px", "30px", "30px"]}
                justify="space-between"
              >
                <HStack>
                  <Card
                    width={["60px", "80px", "95px", "100px", "100px"]}
                    height={["60px", "80px", "95px", "100px", "100px"]}
                    bgImage="/images/radio2.jpeg"
                  ></Card>
                  <Stack
                    pl={["10px", "30px", "30px", "30px", "30px"]}
                    direction="column"
                    justify="space-evenly"
                  >
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
                  p={["5px", "10px", "15px", "15px", "15px"]}
                  boxSize={["50px", "60px", "70px", "70px", "70px"]}
                  alignSelf="center"
                  borderRadius="40px"
                  bgColor="blackAlpha.400"
                >
                  <CiPlay1 size="40px" />
                </Box>
              </Stack>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

Radio.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Radio;
