import { IoMdHome } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { Box, Img, Text, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";

export const MusicBoxHeader = () => {
  return (
    <Link href="/">
      <Stack
        h="80px"
        ml="25px"
        direction="row"
        alignItems="center"
        display={["none", "none", "none", "flex", "flex"]}
      >
        <Img src="/images/musicbox.png" boxSize="25px" />
        <Text pl="10px">MUSIC BOX</Text>
      </Stack>
    </Link>
  );
};

export const MainCategories = () => {
  return (
    <Box>
      <Text
        mt="10px"
        mb="20px"
        ml="25px"
        fontSize="12px"
        color="gray.700"
        fontWeight="bold"
      >
        MAIN CATEGORIES
      </Text>
      {[
        { href: "/", title: "Home", icon: <IoMdHome /> },
        { href: "/explore", title: "Explore", icon: <IoMdHome /> },
        { href: "/new_releases", title: "New Releases", icon: <IoMdHome /> },
        { href: "/top_charts", title: "Top Charts", icon: <IoMdHome /> },
        { href: "/radio", title: "Radio", icon: <IoMdHome /> },
        { href: "/new_music", title: "New Music", icon: <IoMdHome /> },
      ].map((item) => {
        return (
          <Link key={""} href={item.href}>
            <Stack
              p="13px"
              pl="25px"
              pb="15px"
              direction="row"
              _hover={{
                fontWeight: "bold",
                color: "purple.600",
                alignItems: "center",
                borderRadius: "25px",
                backgroundColor: "white",
              }}
            >
              <Stack direction="row">
                <Box mr="10px" pt="3px" pb="3px" color="gray.500">
                  {item.icon}
                </Box>
                <Text
                  fontWeight="bold"
                  fontSize="12px"
                  width="100px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {item.title}
                </Text>
              </Stack>
              <Stack pr={["0", "0", "0", "20px", "0"]}>
                <Box p="5px">
                  <SlArrowRight size="10px" />
                </Box>
              </Stack>
            </Stack>
          </Link>
        );
      })}
    </Box>
  );
};

export const YourMusic = () => {
  return (
    <Box>
      <Text
        mt="40px"
        mb="20px"
        ml="25px"
        fontSize="12px"
        color="gray.700"
        fontWeight="bold"
      >
        YOUR MUSIC
      </Text>
      {[
        { href: "/favourite", title: "Favourite", icon: <IoMdHome /> },
        { href: "/history", title: "History", icon: <IoMdHome /> },
      ].map((item) => {
        return (
          <Link key={""} href={item.href}>
            <Stack
              p="13px"
              pl="25px"
              pb="15px"
              direction="row"
              _hover={{
                fontWeight: "bold",
                color: "purple.600",
                alignItems: "center",
                borderRadius: "25px",
                backgroundColor: "white",
              }}
            >
              <Stack direction="row">
                <Box mr="10px" pt="3px" pb="3px" color="gray.500">
                  {item.icon}
                </Box>
                <Text
                  fontWeight="bold"
                  fontSize="12px"
                  width="100px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {item.title}
                </Text>
              </Stack>
              <Stack pr={["0", "0", "0", "20px", "0"]}>
                <Box p="5px">
                  <SlArrowRight size="10px" />
                </Box>
              </Stack>
            </Stack>
          </Link>
        );
      })}
    </Box>
  );
};

export const YourPlaylists = () => {
  return (
    <Box>
      <Text
        mt="40px"
        mb="20px"
        ml="25px"
        fontSize="12px"
        color="gray.700"
        fontWeight="bold"
      >
        YOUR PLAYLISTS
      </Text>
      {[
        {
          href: "/my_rock_collect",
          title: "My Rock Collect",
          icon: <IoMdHome />,
        },
        { href: "/best_music", title: "Best Music", icon: <IoMdHome /> },
        { href: "/hits_of_90s", title: "Hits of 90s ", icon: <IoMdHome /> },
        { href: "/classic_music", title: "Classic Music", icon: <IoMdHome /> },
        { href: "/new_pop_music", title: "New Pop Music", icon: <IoMdHome /> },
        { href: "/slipknot", title: "Slipknot", icon: <IoMdHome /> },
      ].map((item) => {
        return (
          <Link key={""} href={item.href}>
            <Stack
              p="13px"
              pl="25px"
              pb="15px"
              direction="row"
              _hover={{
                fontWeight: "bold",
                color: "purple.600",
                alignItems: "center",
                borderRadius: "25px",
                backgroundColor: "white",
              }}
            >
              <Stack direction="row">
                <Box mr="10px" pt="3px" pb="3px" color="gray.500">
                  {item.icon}
                </Box>
                <Text
                  fontWeight="bold"
                  fontSize="12px"
                  width="100px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {item.title}
                </Text>
              </Stack>
              <Stack pr={["0", "0", "0", "20px", "0"]}>
                <Box p="5px">
                  <SlArrowRight size="10px" />
                </Box>
              </Stack>
            </Stack>
          </Link>
        );
      })}
      <Button
        mt="20px"
        mb="20px"
        ml="25px"
        fontSize="12px"
        color="gray.700"
        fontWeight="bold"
        borderRadius="25px"
      >
        New Playlist
      </Button>
    </Box>
  );
};

export const YourFavouriteArtist = () => {
  return (
    <Box>
      <Text
        mt="40px"
        mb="20px"
        ml="25px"
        fontSize="12px"
        color="gray.700"
        fontWeight="bold"
      >
        YOUR FAVOURITE ARTIST
      </Text>

      {[
        { href: "", artistName: "Billie Eilish", artistImage: <IoMdHome /> },
        { href: "", artistName: "Olivia Rodrigo", artistImage: <IoMdHome /> },
        { href: "", artistName: "Billie Eilish", artistImage: <IoMdHome /> },
        { href: "", artistName: "Olivia Rodrigo", artistImage: <IoMdHome /> },
        { href: "", artistName: "Billie Eilish", artistImage: <IoMdHome /> },
        { href: "", artistName: "Olivia Rodrigo", artistImage: <IoMdHome /> },
        { href: "", artistName: "Billie Eilish", artistImage: <IoMdHome /> },
        { href: "", artistName: "Olivia Rodrigo", artistImage: <IoMdHome /> },
        { href: "", artistName: "Billie Eilish", artistImage: <IoMdHome /> },
        {
          href: "",
          artistName: "Georger Harrison Senior",
          artistImage: <IoMdHome />,
        },
      ].map((item) => {
        return (
          <Link key={""} href={item.href}>
            <Stack
              p="13px"
              pl="25px"
              pb="15px"
              direction="row"
              _hover={{
                fontWeight: "bold",
                color: "purple.600",
                alignItems: "center",
                borderRadius: "25px",
                backgroundColor: "white",
              }}
            >
              <Stack direction="row">
                <Box mr="10px" pt="3px" pb="3px" color="gray.500">
                  {item.artistImage}
                </Box>
                <Text
                  fontWeight="bold"
                  fontSize="12px"
                  width="100px"
                  noOfLines={1}
                >
                  {item.artistName}
                </Text>
              </Stack>
              <Stack pr={["0", "0", "0", "20px", "0"]}>
                <Box p="5px">
                  <SlArrowRight size="10px" />
                </Box>
              </Stack>
            </Stack>
          </Link>
        );
      })}
    </Box>
  );
};

export const YourLastSongs = () => {
  return (
    <Box>
      <Text
        mt="40px"
        mb="20px"
        ml="25px"
        fontSize="12px"
        color="gray.700"
        fontWeight="bold"
      >
        YOUR LAST SONGS
      </Text>
      {[
        {
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
        {
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
        {
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
        {
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
        {
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
      ].map((item) => {
        return (
          <Link key={""} href={item.href}>
            <Stack
              p="13px"
              pl="25px"
              pb="15px"
              direction="row"
              _hover={{
                fontWeight: "bold",
                color: "purple.600",
                alignItems: "center",
                borderRadius: "25px",
                backgroundColor: "white",
              }}
            >
              <Stack direction="row">
                <Box mr="10px" pt="3px" pb="3px" color="gray.500">
                  {item.trackImage}
                </Box>
                <Text
                  fontWeight="bold"
                  fontSize="12px"
                  width="100px"
                  noOfLines={1}
                >
                  {item.trackTitle} - {item.artistName}
                </Text>
              </Stack>
              <Stack pr={["0", "0", "0", "20px", "0"]}>
                <Box p="5px">
                  <SlArrowRight size="10px" />
                </Box>
              </Stack>
            </Stack>
          </Link>
        );
      })}
    </Box>
  );
};
