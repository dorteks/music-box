import {
  Box,
  Text,
  HStack,
  Stack,
  Card,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const CircleIcon = (props: JSX.IntrinsicAttributes) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const MoodsAndGenres = () => {
  return (
    <Box mt="50px" w="800px">
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
            fontSize="18px"
          >
            Moods and Genres
          </Text>
        </HStack>
        <HStack>
          <BsArrowLeftCircle size="35px" />
          <BsArrowRightCircle size="35px" />
        </HStack>
      </Stack>

      <Grid key={""} templateColumns="repeat(4, 1fr)" gap={2} mt="30px">
        {[
          { href: "", genre: "Metal & Hardcore" },
          { href: "", genre: "Good Mood" },
          { href: "", genre: "Popular Music" },
          { href: "", genre: "Dance & Electronic" },
          { href: "", genre: "R & B" },
          { href: "", genre: "Amapiano" },
          { href: "", genre: "Traditional" },
          { href: "", genre: "Dancehall" },
          { href: "", genre: "Gospel" },
          { href: "", genre: "Hip Hop $ Rap" },
          { href: "", genre: "Pop" },
          { href: "", genre: "Classical" },
          { href: "", genre: "Fuji" },
          { href: "", genre: "Juju" },
          { href: "", genre: "Reggae" },
        ].map((item) => {
          return (
            <GridItem key="">
              <Link href={item.href}>
                <Card
                  key={""}
                  bgColor="purple.300"
                  flexDirection="row"
                  pl="10px"
                  pr="10px"
                  alignItems="center"
                  justify="space-between"
                  width="200px"
                  height="50px"
                >
                  <CircleIcon />
                  <Text key={""} w="150px" pl="10px" fontSize="14px">
                    {item.genre}{" "}
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
