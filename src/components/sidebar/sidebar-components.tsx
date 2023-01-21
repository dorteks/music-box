import { IoMdHome } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { Box, Text, Stack, Button, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { GiMusicSpell } from "react-icons/gi";
import { FaCompass } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import {
  BsCalendarEvent,
  BsFillBookmarkFill,
  BsSuitHeartFill,
} from "react-icons/bs";
import { CgEditBlackPoint } from "react-icons/cg";
import { GrHistory } from "react-icons/gr";

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
        <GiMusicSpell size="30px" />
        <Text pl="5px">MUSIC BOX</Text>
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
        { href: "/explore", title: "Explore", icon: <FaCompass /> },
        {
          href: "/new_releases",
          title: "New Releases",
          icon: <BsCalendarEvent />,
        },
        { href: "/top_charts", title: "Top Charts", icon: <BiNetworkChart /> },
        { href: "/radio", title: "Radio", icon: <CgEditBlackPoint /> },
        {
          href: "/new_music",
          title: "New Music",
          icon: <BsFillBookmarkFill />,
        },
      ].map((item) => {
        return (
          <Link key="categories" href={item.href}>
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
                  width="100px"
                  fontSize="12px"
                  fontWeight="bold"
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
        {
          href: "/favourite",
          title: "Favourite",
          icon: <BsSuitHeartFill color="red" />,
        },
        { href: "/history", title: "History", icon: <GrHistory /> },
      ].map((item) => {
        return (
          <Link key="yourMusic" href={item.href}>
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
                  width="100px"
                  fontSize="12px"
                  fontWeight="bold"
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
          href: "",
          title: "Playlist Title #1",
          icon: <GiMusicSpell />,
        },
        {
          href: "/my_rock_collect",
          title: "My Rock Collect",
          icon: <GiMusicSpell />,
        },
        { href: "/best_music", title: "Best Music", icon: <GiMusicSpell /> },
        { href: "/hits_of_90s", title: "Hits of 90s ", icon: <GiMusicSpell /> },
        {
          href: "/classic_music",
          title: "Classic Music",
          icon: <GiMusicSpell />,
        },
        {
          href: "/new_pop_music",
          title: "New Pop Music",
          icon: <GiMusicSpell />,
        },
        { href: "/slipknot", title: "Slipknot", icon: <GiMusicSpell /> },
      ].map((item) => {
        return (
          <Link key="yourPlaylist" href={item.href}>
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
        {
          href: "",
          artistName: "Billie Eilish",
          artistImage: <Avatar boxSize="20px" />,
        },
        {
          href: "",
          artistName: "Georger Harrison Senior",
          artistImage: <Avatar boxSize="20px" />,
        },
      ].map((item) => {
        return (
          <Link key="favouriteArtist" href={item.href}>
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
          <Link key="lastSongs" href={item.href}>
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
