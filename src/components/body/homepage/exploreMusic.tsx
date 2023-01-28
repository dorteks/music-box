import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Box, Card, Heading, Text, Stack, HStack } from "@chakra-ui/react";

const exploreData = [
  {
    id: 6,
    lineColor: "green",
    playButtonColor: "purple",
    blogTitle: "WATCH NOW",
    heading: "Our New Video Series Breaks Down",
    subHeading: "The Lates and Greatest in Music",
    image: "/images/DojaCat.png",
    imageText: "Doja Cat",
    song: "/tikuku.mp3",
  },
  {
    id: 5,
    lineColor: "red",
    playButtonColor: "blue",
    blogTitle: "NEW ALBUM + INTERVIEW",
    heading: "TIKUKU",
    subHeading: "Candy Bleakz",
    image: "/images/CandyBleakz.webp",
    imageText: "Candy Bleakz",
    song: "/tikuku.mp3",
  },
  {
    id: 4,
    lineColor: "blue",
    playButtonColor: "red",
    blogTitle: "UPDATED PLAYLIST",
    heading: "Today's Country",
    subHeading: "Special For You",
    image: "/images/mettalica.jpg",
    imageText: "Mettalica",
    song: "/tikuku.mp3",
  },
  {
    id: 1,
    lineColor: "green",
    playButtonColor: "purple",
    blogTitle: "WATCH NOW",
    heading: "Our New Video Series Breaks Down",
    subHeading: "The Lates and Greatest in Music",
    image: "/images/DojaCat.png",
    imageText: "Doja Cat",
    song: "/tikuku.mp3",
  },
  {
    id: 2,
    lineColor: "red",
    playButtonColor: "blue",
    blogTitle: "NEW ALBUM + INTERVIEW",
    heading: "TIKUKU",
    subHeading: "Candy Bleakz",
    image: "/images/CandyBleakz.webp",
    imageText: "Candy Bleakz",
    song: "/tikuku.mp3",
  },
  {
    id: 3,
    lineColor: "blue",
    playButtonColor: "red",
    blogTitle: "UPDATED PLAYLIST",
    heading: "Today's Country",
    subHeading: "Special For You",
    image: "/images/mettalica.jpg",
    imageText: "Mettalica",
    song: "/tikuku.mp3",
  },
];

const ExploreMusic = () => {
  // useEffect(() => {
  //   const htmlaudio: HTMLAudioElement = new Audio("/tikuku.mp3");
  //   console.log(htmlaudio, "htmlaudio from explore");

  //   const playButton = () => {
  //     return <Button onClick={() => htmlaudio.play()}>PLay</Button>;
  //   };

  //   const pauseButton = () => {
  //     return <Button onClick={() => htmlaudio.pause()}>Pause</Button>;
  //   };
  // }, []);

  return (
    <Box mt="50px">
      <HStack justify="space-between">
        <Heading size="md"> Explore Music </Heading>
        <HStack gap={3}>
          <BsArrowLeftCircle size="35px" />
          <BsArrowRightCircle size="35px" />
        </HStack>
      </HStack>

      <Stack direction="row" gap={[5, 7, 4, 4, 5]} overflowX="scroll">
        {exploreData.map((item) => {
          return (
            <Stack
              key={item.id}
              direction="column"
              maxWidth={["350px", "330px", "300px", "300px", "300px"]}
            >
              <Link href={`explore/` + item.blogTitle}>
                <Card
                  w={["330px", "300px", "285px", "300px", "300px"]}
                  h="5px"
                  mt="30px"
                  bgColor={item.lineColor}
                />
                <Text pt="30px" fontSize="sm" color="gray.600">
                  {item.blogTitle}
                </Text>
                <Text fontSize="sm" fontWeight="bold" pt="20px" noOfLines={1}>
                  {item.heading}
                </Text>
                <Text fontSize="sm" fontWeight="bold" pb="20px">
                  {item.subHeading}
                </Text>
              </Link>
              <Card
                w={["330px", "300px", "285px", "300px", "300px"]}
                h="220px"
                backgroundImage={item.image}
              >
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
