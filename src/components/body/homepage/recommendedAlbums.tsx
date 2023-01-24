import {
  BsCircle,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";
import { BsPlayCircleFill } from "react-icons/bs";
import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";

const RecommendedAlbums = () => {
  return (
    <Box mt="60px">
      <Stack direction="row" alignItems="center" justify="space-between">
        <HStack>
          <Box pt="3px" pb="3px">
            <BsCircle size="20px" />
          </Box>
          <Text
            pl="5px"
            color="gray.700"
            fontWeight="bold"
            textAlign="center"
            fontSize={["14px", "18px", "18px", "18px", "18px"]}
          >
            Recommended Albums
          </Text>
        </HStack>
        <HStack gap={3}>
          <BsArrowLeftCircle size="35px" />
          <BsArrowRightCircle size="35px" />
        </HStack>
      </Stack>

      <HStack mt="30px" gap={[5, 7, 5, 5, 5]} overflowX="scroll">
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
          {
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
        ].map((item) => {
          return (
            <Card
              key="recommendedAlbums"
              minWidth={["330px", "300px", "280px", "300px", "300px"]}
              height={["250px", "220px", "220px", "230px", "240px"]}
              backgroundImage={item.image}
            >
              <Box
                w="40px"
                mt="30px"
                ml={["250px", "250px", "200px", "230px", "230px"]}
              >
                <BsPlayCircleFill size="sm" />
              </Box>

              <Text mt="60px" ml="20px" color="white" fontSize="18px">
                {item.title}
              </Text>
              <Text mt="5px" ml="20px" color="white" fontSize="18px">
                {item.artiste}
              </Text>
            </Card>
          );
        })}
      </HStack>
    </Box>
  );
};

export default RecommendedAlbums;
