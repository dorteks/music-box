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
    <Box pt="40px" pl="20px" pb="60px">
      {[
        {
          blogTitle:
            "SINGING SENSATION CANDY BLEAKZ, DROPS EXCITING AFROBEAT DEBUT TIKUKU",
          blogAuthor: "Dorteks",
          date: "14th January, 2023",
          songCoverImage: "/images/DojaCat.png",

          blogParag1:
            "Nigerian multitalented emerging artist David Tokuma Dekor also known as PAWZZ, drops an exciting debut single, Koma. Its the lead single to his upcoming debut EP Prezz Play. Koma is an uptempo groove infused with African percussions and sweet harmonies with a vocal deliver  that ensures each lyric sticks to listeners like an anthem.",
          blogParag2:
            "Its an exhilarating debut by Pawzz, and we are excited to see what this up-and-coming Afrobeats artist has in store next.",

          blogParag3: "",
          blogParag4: "",
        },
      ].map((item) => {
        return (
          <VStack key="blogTitle" gap={4}>
            <Heading size="2xl" textAlign="center">
              {item.blogTitle}
            </Heading>
            <Text>by {item.blogAuthor} </Text>
            <Text> {item.date} </Text>

            <Card width="1000px" height="550px" bgImage={item.songCoverImage}>
              blog picture here
            </Card>

            <Text> Blog here </Text>
            <Text width="800px">{item.blogParag1}</Text>
            <Text width="800px">{item.blogParag2}</Text>
            <Text width="800px">{item.blogParag3}</Text>
            <Text width="800px">{item.blogParag4}</Text>

            <Card width="500px" height="300px" bgImage="/images/DojaCat.png">
              <Box alignSelf="center">
                <BsPlay size="80px" />
              </Box>
            </Card>

            <HStack pt="40px" gap={10}>
              <Button width="300px">
                <HiArrowLeft size="20px" />
                <Text pl="30px">Previous Post</Text>
              </Button>
              <Button width="300px">
                <Text pr="30px">Next Post </Text>
                <HiArrowRight size="20px" />
              </Button>
            </HStack>
          </VStack>
        );
      })}

      {/* 

      <VStack gap={4}>
        <Heading size="2xl" textAlign="center">
          SINGING SENSATION CANDY BLEAKZ, DROPS EXCITING AFROBEAT DEBUT TIKUKU
        </Heading>
        <Text>by Dorteks </Text>
        <Text> 14th January, 2023 </Text>

        <Card width="1000px" height="550px" bgImage="/images/DojaCat.png">
          big picture here
        </Card>

        <Text> Blog here </Text>
        <Text width="800px">
          Nigerian multitalented emerging artist David Tokuma Dekor also known
          as PAWZZ, drops an exciting debut single, Koma. Its the lead single to
          his upcoming debut EP Prezz Play. Koma is an uptempo groove infused
          with African percussions and sweet harmonies with a vocal delivery
          that ensures each lyric sticks to listeners like an anthem.
        </Text>
        <Text width="800px">
          Its an exhilarating debut by Pawzz, and we are excited to see what
          this up-and-coming Afrobeats artist has in store next.{" "}
        </Text>

        <Card width="500px" height="300px" bgImage="/images/DojaCat.png">
          <Box alignSelf="center">
            <BsPlay size="80px" />
          </Box>
        </Card>

        <HStack pt="40px" gap={10}>
          <Button width="300px">
            <HiArrowLeft size="20px" />
            <Text pl="30px">Previous</Text>
          </Button>
          <Button width="300px">
            <Text pr="30px">Next</Text>
            <HiArrowRight size="20px" />
          </Button>
        </HStack>
      </VStack> */}
    </Box>
  );
};

ExploreSong.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ExploreSong;
