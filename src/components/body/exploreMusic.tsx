import { Box, Card, Heading, Text, Stack, HStack } from "@chakra-ui/react";
import { BiPlayCircle } from "react-icons/bi";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const ExploreMusic = () => {
  return (
    <Box mt="50px">
      <HStack justify="space-between">
        <Heading size="md"> Explore Music </Heading>
        <HStack>
          <BsArrowLeftCircle size="35px" />
          <BsArrowRightCircle size="35px" />
        </HStack>
      </HStack>

      {/* // width 310px, gap 5 */}
      {/* // width 220px, gap 3 */}

      <Stack direction="row" gap={3}>
        {[
          {
            lineColor: "green",
            playButtonColor: "purple",
            blogTitle: "WATCH NOW",
            heading: "Our New Video Series Breaks Down",
            subHeading: "The Lates and Greatest in Music",
            image: "/images/DojaCat.png",
            imageText: "Doja Cat",
          },
          {
            lineColor: "red",
            playButtonColor: "blue",
            blogTitle: "NEW ALBUM + INTERVIEW",
            heading: "TIKUKU",
            subHeading: "Candy Bleakz",
            image: "/images/CandyBleakz.webp",
            imageText: "Candy Bleakz",
          },
          {
            lineColor: "blue",
            playButtonColor: "red",
            blogTitle: "UPDATED PLAYLIST",
            heading: "Today's Country",
            subHeading: "Special For You",
            image: "/images/mettalica.jpg",
            imageText: "Mettalica",
          },
        ].map((item) => {
          return (
            <Stack key={""} direction="column" w="220px">
              <Card w="220px" h="5px" mt="30px" bgColor={item.lineColor} />
              <Text pt="30px" fontSize="sm" color="gray.600">
                {item.blogTitle}
              </Text>
              <Text fontSize="sm" fontWeight="bold" pt="20px" noOfLines={1}>
                {item.heading}
              </Text>
              <Text fontSize="sm" fontWeight="bold" pb="20px">
                {item.subHeading}
              </Text>
              <Card w="220px" h="220px" backgroundImage={item.image}>
                <Box w="40px" mt="30px" ml="20px">
                  <BiPlayCircle size="sm" color={item.playButtonColor} />
                </Box>

                <Text mt="80px" ml="20px" color="white" fontSize="18px">
                  {item.imageText}
                </Text>
              </Card>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExploreMusic;
