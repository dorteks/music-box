import {
  Box,
  Text,
  Card,
  Icon,
  Grid,
  Stack,
  HStack,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export const CircleIcon = (props: JSX.IntrinsicAttributes) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const MoodsAndGenres = () => {
  return (
    <Box mt="50px">
      <Stack direction="row" alignItems="center" justify="space-between">
        <HStack>
          <Box pt="3px" pb="3px">
            <HamburgerIcon boxSize="25px" />
          </Box>
          <Text
            p="5px"
            color="gray.700"
            fontWeight="bold"
            textAlign="center"
            fontSize={["16px", "18px", "18px", "18px", "18px"]}
          >
            Moods and Genres
          </Text>
        </HStack>
        <HStack gap={3}>
          <BsArrowLeftCircle size="35px" />
          <BsArrowRightCircle size="35px" />
        </HStack>
      </Stack>

      <Grid templateColumns={["repeat(4, 1fr)"]} gap={3} mt="30px">
        {[
          { id: 16, href: "", genre: "Metal & Hardcore" },
          { id: 1, href: "", genre: "Good Mood" },
          { id: 2, href: "", genre: "Popular Music" },
          { id: 3, href: "", genre: "Dance & Electronic" },
          { id: 4, href: "", genre: "R & B" },
          { id: 5, href: "", genre: "Amapiano" },
          { id: 6, href: "", genre: "Traditional" },
          { id: 7, href: "", genre: "Dancehall" },
          { id: 8, href: "", genre: "Gospel" },
          { id: 9, href: "", genre: "Hip Hop $ Rap" },
          { id: 10, href: "", genre: "Pop" },
          { id: 11, href: "", genre: "Classical" },
          { id: 12, href: "", genre: "Fuji" },
          { id: 13, href: "", genre: "Juju" },
          { id: 14, href: "", genre: "Reggae" },
          { id: 15, href: "", genre: "Traditional" },
        ].map((item) => {
          return (
            <GridItem key={item.id}>
              <Link href={item.href}>
                <Card
                  bgColor="purple.300"
                  flexDirection="row"
                  pl="10px"
                  pr="10px"
                  alignItems="center"
                  justify="space-between"
                  width={["220px", "220px", "220px", "220px", "240px"]}
                  height="50px"
                >
                  <CircleIcon />
                  <Text w="180px" pl="10px" fontSize="14px">
                    {item.genre}
                  </Text>
                  <FiArrowRight />
                </Card>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MoodsAndGenres;
