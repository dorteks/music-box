import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoHeadsetOutline } from "react-icons/io5";

const Artists = () => {
  return (
    <Box>
      <Stack direction="row">
        {[
          { byGenre: "All" },
          { byGenre: "Afrobeats" },
          { byGenre: "Afropop" },
          { byGenre: "Gospel" },
          { byGenre: "Amapiano" },
          { byGenre: "Hip Hop & Rap" },
          { byGenre: "Electronic" },
          { byGenre: "R & B" },
          { byGenre: "Dancehall" },
          { byGenre: "Reggae" },
          { byGenre: "Fuji" },
          { byGenre: "Juju" },
          { byGenre: "Pop" },
          { byGenre: "Traditional" },
          { byGenre: "Afropop" },
        ].map((item) => {
          return (
            <Button
              fontSize="14px"
              fontWeight="hairline"
              width="fit-content"
              bgColor="teal"
              borderRadius="20px"
              mr="10px"
            >
              {item.byGenre}
            </Button>
          );
        })}
      </Stack>

      <Stack direction="row" mt="20px">
        {[
          { bySex: "All" },
          { bySex: "Male" },
          { bySex: "Female" },
          { bySex: "Group & Band" },
        ].map((item) => {
          return (
            <Button
              fontSize="14px"
              fontWeight="hairline"
              width="fit-content"
              bgColor="teal"
              borderRadius="20px"
              mr="10px"
            >
              {item.bySex}
            </Button>
          );
        })}
      </Stack>

      <Stack direction="row" mt="20px">
        {[
          { byCountry: "All" },
          { byCountry: "Nigerian" },
          { byCountry: "European & North American" },
          { byCountry: "Other" },
        ].map((item) => {
          return (
            <Button
              fontSize="14px"
              fontWeight="hairline"
              width="fit-content"
              bgColor="teal"
              borderRadius="20px"
              mr="10px"
            >
              {item.byCountry}
            </Button>
          );
        })}
      </Stack>

      <Grid templateColumns="repeat(5, 1fr)" justifyItems="center" mt="40px">
        {[
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
        ].map((item) => {
          return (
            <GridItem>
              <Avatar src={item.artistImage} boxSize="230px" />
              <Text textAlign="center" pt="20px" fontSize="20px">
                {item.artistName}
              </Text>
              <Stack
                direction="row"
                justifyContent="center"
                pt="10px"
                pb="50px"
              >
                <IoHeadsetOutline />
                <Text fontSize="14px">
                  {item.likes} {item.unit}
                </Text>
              </Stack>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Artists;
