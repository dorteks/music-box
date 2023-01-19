import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsFillBookmarkFill,
  BsPlayCircleFill,
} from "react-icons/bs";

const LatestNews = () => {
  return (
    <Box mt="60px">
      <Stack direction="row" alignItems="center" justify="space-between">
        <HStack>
          <Box pt="3px" pb="3px">
            <BsFillBookmarkFill size="20px" />
          </Box>
          <Text
            p="5px"
            color="gray.700"
            fontWeight="bold"
            textAlign="center"
            fontSize="18px"
          >
            Latest News
          </Text>
        </HStack>
        <HStack>
          <BsArrowLeftCircle size="35px" />
          <BsArrowRightCircle size="35px" />
        </HStack>
      </Stack>

      <HStack mt="30px" gap={3}>
        {[
          {
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
        ].map((item) => {
          return (
            <Card key={""}>
              <Card w="160px" h="220px" backgroundImage={item.image}>
                <Box w="40px" mt="30px" ml="100px">
                  <BsPlayCircleFill size="sm" />
                </Box>
              </Card>

              <Card w="160px" h="80px" justify="center">
                <Text ml="20px" fontSize="18p0">
                  {item.title}
                </Text>
                <Text ml="20px" fontSize="18px">
                  {item.artiste}
                </Text>
              </Card>
            </Card>
          );
        })}
      </HStack>
    </Box>
  );
};

export default LatestNews;
