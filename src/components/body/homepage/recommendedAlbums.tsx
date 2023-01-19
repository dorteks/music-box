import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsCircle,
} from "react-icons/bs";

const RecommendedAlbums = () => {
  return (
    <Box mt="60px">
      <Stack direction="row" alignItems="center" justify="space-between">
        <HStack>
          <Box pt="3px" pb="3px">
            <BsCircle size="20px" />
          </Box>
          <Text
            p="5px"
            color="gray.700"
            fontWeight="bold"
            textAlign="center"
            fontSize="18px"
          >
            Recommended Albums
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
        ].map((item) => {
          return (
            <Card key={""} w="220px" h="220px" backgroundImage={item.image}>
              <Box w="40px" mt="30px" ml="150px">
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
