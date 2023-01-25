import Layout from "@/layouts/main";
import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { BsPlay } from "react-icons/bs";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const ExploreSong = () => {
  return (
    <Box
      pt="40px"
      pb="60px"
      pl={["10px", "10px", "20px", "20px", "20px"]}
      pr={["10px", "10px", "20px", "40px", "30px"]}
      width={["100vw", "100vw", "100vw", "85vw", "85vw"]}
    >
      {[
        // {
        //   blog: "SINGING SENSATION CANDY BLEAKZ, DROPS EXCITING AFROBEAT DEBUT TIKUKU",
        //   blogAuthor: "Dorteks",
        //   date: "14th January, 2023",
        //   songCoverImage: "/images/CandyBleakz.webp",

        //   blogParag1:
        //     "Nigerian multitalented emerging artist David Tokuma Dekor also known as PAWZZ, drops an exciting debut single, Koma. Its the lead single to his upcoming debut EP Prezz Play. Koma is an uptempo groove infused with African percussions and sweet harmonies with a vocal deliver  that ensures each lyric sticks to listeners like an anthem.",
        //   blogParag2:
        //     "Its an exhilarating debut by Pawzz, and we are excited to see what this up-and-coming Afrobeats artist has in store next.",

        //   blogParag3: "",
        //   blogParag4: "",
        // },
        {
          blog: "NEW ALBUM RELEASES BY ONE OF THE MOST IMPRESSIVE AND MESMERISING FEMALE TALENTS OF THIS GENERATION, DOJA CAT",
          blogAuthor: "Dorteks",
          date: "20th January, 2023",
          songCoverImage: "/images/DojaCat.png",

          blogParag1:
            "Doja Cat is a triple threat: a pop star, an edgelord, and a hottie.  On the surface, she resembles an e-girl making fart jokes who’d peak at 70,000 Twitter followers more than a masterful, total-package artist.",
          blogParag2:
            "On June 11, Doja released the second single, “Need to Know,” from her third studio album, Planet Her. It’s one of three tracks from the album produced by hitmaker Dr. Luke",
          blogParag3: "",
          blogParag4: "",
        },
      ].map((item) => {
        return (
          <VStack key="blogTitle" gap={4}>
            <Heading size={["sm", "md", "xl", "xl", "2xl"]} textAlign="center">
              {item.blog}
            </Heading>
            <Text>by {item.blogAuthor} </Text>
            <Text> {item.date} </Text>

            <Card
              width={["85vw", "85vw", "85vw", "70vw", "75vw"]}
              height={["25vh", "35vh", "45vh", "450px", "550px"]}
              bgImage={item.songCoverImage}
            >
              blog picture here
            </Card>

            <Text> Blog here </Text>
            <Text width={["90vw", "93vw", "90vw", "75vw", "75vw"]}>
              {item.blogParag1}
            </Text>
            <Text width={["90vw", "93vw", "90vw", "75vw", "75vw"]}>
              {item.blogParag2}
            </Text>
            <Text width={["90vw", "93vw", "90vw", "75vw", "75vw"]}>
              {item.blogParag3}
            </Text>
            <Text width={["90vw", "93vw", "90vw", "75vw", "75vw"]}>
              {item.blogParag4}
            </Text>

            <Card
              width={["60vw", "55vw", "38vw", "35vw", "30vw"]}
              height={["20vh", "25vh", "28vh", "250px", "250px"]}
              bgImage={item.songCoverImage}
            >
              <Box alignSelf="center">
                <BsPlay size="80px" />
              </Box>
            </Card>

            {/* previos post and next post for mobile small screen */}
            <HStack
              pt="40px"
              gap={5}
              display={["flex", "none", "none", "none", "none"]}
            >
              <Button width={["130px", "0px", "0px", "0px", "0px"]}>
                <Text textAlign="center">Prev Post</Text>
              </Button>
              <Button width={["130px", "0px", "0px", "0px", "0px"]}>
                <Text textAlign="center">Next Post </Text>
              </Button>
            </HStack>

            {/* previos post and next post for  bigger screens */}

            <HStack
              pt="40px"
              gap={10}
              display={["none", "flex", "flex", "flex", "flex"]}
            >
              <Button width={["120px", "200px", "300px", "300px", "300px"]}>
                <HiArrowLeft size="20px" />
                <Text pl="30px">Previous Post</Text>
              </Button>
              <Button width={["120px", "200px", "300px", "300px", "300px"]}>
                <Text pr="30px">Next Post </Text>
                <HiArrowRight size="20px" />
              </Button>
            </HStack>
          </VStack>
        );
      })}
    </Box>
  );
};

ExploreSong.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ExploreSong;
