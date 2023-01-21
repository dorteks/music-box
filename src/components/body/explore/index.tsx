import Layout from "@/layouts/main";
import { Box, Card, Grid, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { BiPlayCircle } from "react-icons/bi";

const Explore = () => {
  return (
    <Box>
      <Grid
        key={""}
        templateColumns="repeat(4, 1fr)"
        gap={2}
        ml="20px"
        mt="30px"
      >
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
          {
            lineColor: "green",
            playButtonColor: "purple",
            blogTitle: "DUDUKE OFFICIAL VIDEO",
            heading: "Duduke",
            subHeading: "Simi",
            image: "/images/DojaCat.png",
            imageText: "Simi",
          },
          {
            lineColor: "red",
            playButtonColor: "blue",
            blogTitle: "NEW ALBUM + INTERVIEW",
            heading: "FEM",
            subHeading: "Davido",
            image: "/images/CandyBleakz.webp",
            imageText: "Davido",
          },
          {
            lineColor: "blue",
            playButtonColor: "red",
            blogTitle: "ECHO ROOM - AIMASIKO",
            heading: "Simi",
            subHeading: "Special For You",
            image: "/images/CandyBleakz.webp",
            imageText: "Simi",
          },
          {
            lineColor: "red",
            playButtonColor: "blue",
            blogTitle: "NEW ALBUM + INTERVIEW",
            heading: "FEM",
            subHeading: "Davido",
            image: "/images/CandyBleakz.webp",
            imageText: "Davido",
          },
          {
            lineColor: "blue",
            playButtonColor: "red",
            blogTitle: "ECHO ROOM - AIMASIKO",
            heading: "Simi",
            subHeading: "Special For You",
            image: "/images/CandyBleakz.webp",
            imageText: "Simi",
          },
          {
            lineColor: "green",
            playButtonColor: "purple",
            blogTitle: "DUDUKE OFFICIAL VIDEO",
            heading: "Duduke",
            subHeading: "Simi",
            image: "/images/DojaCat.png",
            imageText: "Simi",
          },
          {
            lineColor: "red",
            playButtonColor: "blue",
            blogTitle: "NEW ALBUM + INTERVIEW",
            heading: "FEM",
            subHeading: "Davido",
            image: "/images/CandyBleakz.webp",
            imageText: "Davido",
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
      </Grid>
    </Box>
  );
};

Explore.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Explore;
