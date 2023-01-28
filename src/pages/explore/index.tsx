import Layout from "@/layouts/main";
import { Box, Card, Grid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";
import { BiPlayCircle } from "react-icons/bi";

const Explore = () => {
  return (
    <Box>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
        ]}
        gap={2}
        ml="20px"
        mt="30px"
        alignSelf="center"
        // width="100vw"
      >
        {[
          {
            id: 1,
            lineColor: "green",
            playButtonColor: "purple",
            blogTitle: "WATCH NOW",
            heading: "Our New Video Series Breaks Down",
            subHeading: "The Lates and Greatest in Music",
            image: "/images/DojaCat.png",
            imageText: "Doja Cat",
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
          },
          {
            id: 4,
            lineColor: "green",
            playButtonColor: "purple",
            blogTitle: "DUDUKE OFFICIAL VIDEO",
            heading: "Duduke",
            subHeading: "Simi",
            image: "/images/DojaCat.png",
            imageText: "Simi",
          },
          {
            id: 10,
            lineColor: "red",
            playButtonColor: "blue",
            blogTitle: "NEW ALBUM + INTERVIEW",
            heading: "FEM",
            subHeading: "Davido",
            image: "/images/CandyBleakz.webp",
            imageText: "Davido",
          },
          {
            id: 5,
            lineColor: "blue",
            playButtonColor: "red",
            blogTitle: "ECHO ROOM - AIMASIKO",
            heading: "Simi",
            subHeading: "Special For You",
            image: "/images/CandyBleakz.webp",
            imageText: "Simi",
          },
          {
            id: 6,
            lineColor: "red",
            playButtonColor: "blue",
            blogTitle: "NEW ALBUM + INTERVIEW",
            heading: "FEM",
            subHeading: "Davido",
            image: "/images/CandyBleakz.webp",
            imageText: "Davido",
          },
          {
            id: 7,
            lineColor: "blue",
            playButtonColor: "red",
            blogTitle: "ECHO ROOM - AIMASIKO",
            heading: "Simi",
            subHeading: "Special For You",
            image: "/images/CandyBleakz.webp",
            imageText: "Simi",
          },
          {
            id: 8,
            lineColor: "green",
            playButtonColor: "purple",
            blogTitle: "DUDUKE OFFICIAL VIDEO",
            heading: "Duduke",
            subHeading: "Simi",
            image: "/images/DojaCat.png",
            imageText: "Simi",
          },
          {
            id: 9,
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
            <Stack
              key={item.id}
              direction="column"
              w={["210px", "220px", "220px", "220px", "220px"]}
            >
              <Link href={`explore/` + item.blogTitle}>
                <Card
                  w={["210px", "220px", "220px", "220px", "220px"]}
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
                <Text fontSize="sm" fontWeight="bold" pb="20px" noOfLines={1}>
                  {item.subHeading}
                </Text>
              </Link>
              <Card
                w={["210px", "220px", "220px", "220px", "220px"]}
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
      </Grid>
    </Box>
  );
};

Explore.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Explore;
