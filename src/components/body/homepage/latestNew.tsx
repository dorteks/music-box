import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import AudioPlayer from "@/audio/audioPlayer";

const LatestNew = () => {
  return (
    <Box mt="60px">
      <Stack direction="row" alignItems="center" justify="space-between">
        <HStack>
          <Box pt="3px" pb="3px">
            <BsFillBookmarkFill size="20px" />
          </Box>
          <Text
            p="5px"
            fontSize="18px"
            color="gray.700"
            fontWeight="bold"
            textAlign="center"
          >
            Latest New
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
            id: 1,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 2,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 3,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 4,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 5,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 6,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 7,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
        ].map((item) => {
          return (
            <div key={item.id}>
              <Card minWidth="225px" h="220px" backgroundImage={item.image}>
                <Box w="40px" mt="30px" ml="150px">
                  <AudioPlayer song={""} />
                </Box>
              </Card>

              <Card minWidth="225px" h="80px" justify="center">
                <Text ml="20px" fontSize="18p0">
                  {item.title}
                </Text>
                <Text ml="20px" fontSize="12px">
                  {item.artiste}
                </Text>
              </Card>
            </div>
          );
        })}
      </HStack>
    </Box>
  );
};

export default LatestNew;
