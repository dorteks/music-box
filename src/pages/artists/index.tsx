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
    <Box pt="30px" pl={["10px", "10px", "20px", "10px", "20px"]}>
      <Stack direction="row">
        {[
          { id: 1, byGenre: "All" },
          { id: 2, byGenre: "Afrobeats" },
          { id: 3, byGenre: "Afropop" },
          { id: 4, byGenre: "Gospel" },
          { id: 5, byGenre: "Amapiano" },
          { id: 6, byGenre: "Hip Hop & Rap" },
          { id: 7, byGenre: "Electronic" },
          { id: 8, byGenre: "R & B" },
          { id: 9, byGenre: "Dancehall" },
          { id: 10, byGenre: "Reggae" },
          { id: 11, byGenre: "Fuji" },
          { id: 12, byGenre: "Juju" },
          { id: 13, byGenre: "Pop" },
          { id: 14, byGenre: "Traditional" },
          { id: 15, byGenre: "Afropop" },
        ].map((item) => {
          return (
            <Button
              mr="10px"
              key={item.id}
              bgColor="teal"
              fontSize="14px"
              width="fit-content"
              borderRadius="20px"
              fontWeight="hairline"
            >
              {item.byGenre}
            </Button>
          );
        })}
      </Stack>

      <Stack direction="row" mt="20px">
        {[
          { id: 1, bySex: "All" },
          { id: 2, bySex: "Male" },
          { id: 3, bySex: "Female" },
          { id: 4, bySex: "Group & Band" },
        ].map((item) => {
          return (
            <Button
              key={item.id}
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
          { id: 1, byCountry: "All" },
          { id: 2, byCountry: "Nigerian" },
          { id: 3, byCountry: "European & North American" },
          { id: 4, byCountry: "Other" },
        ].map((item) => {
          return (
            <Button
              key={item.id}
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
            id: 1,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 2,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 3,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 4,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 5,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 6,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 7,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 8,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 9,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 10,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 11,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
          {
            id: 12,
            artistName: "Zinoleesky",
            artistImage: "/images/zinoleesky.jpg",
            likes: "81.4",
            unit: "M",
          },
        ].map((item) => {
          return (
            <Link key={item.id} href="artists/songs-by-artist">
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
