import Layout from "@/layouts/main";
import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";
import { IoHeadsetOutline } from "react-icons/io5";

const FavouriteArtists = () => {
  return (
    <Box pl={["10px", "10px", "20px", "10px", "20px"]}>
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
              key="byGenre"
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
              key="bySex"
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
              key="byCountry"
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

      <Grid
        templateColumns={[
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
        ]}
        justifyItems="center"
        mt="40px"
        width={["95vw", "92vw", "97vw", "80vw", "82vw"]}
      >
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
            <Link key="artistName" href="/songs-by-artist">
              <GridItem>
                <Avatar
                  src={item.artistImage}
                  boxSize={["90px", "150px", "180px", "180px", "200px"]}
                />
                <Text
                  textAlign="center"
                  pt="10px"
                  fontSize={["16px", "18px", "20px", "20px", "20px"]}
                >
                  {item.artistName}
                </Text>
                <Stack
                  direction="row"
                  justifyContent="center"
                  pt="10px"
                  pb="50px"
                >
                  <IoHeadsetOutline />
                  <Text fontSize={["12px", "12px", "14px", "14px", "14px"]}>
                    {item.likes} {item.unit}
                  </Text>
                </Stack>
              </GridItem>
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
};

FavouriteArtists.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default FavouriteArtists;
