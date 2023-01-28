import {
  BsCalendarEvent,
  BsFillBookmarkFill,
  BsSuitHeartFill,
} from "react-icons/bs";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { GiMusicSpell } from "react-icons/gi";
import { SlArrowRight } from "react-icons/sl";
import { BiNetworkChart } from "react-icons/bi";
import { CgEditBlackPoint } from "react-icons/cg";
import { Box, Text, Stack, Button, Avatar } from "@chakra-ui/react";

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
        fontSize="13px"
        color="gray.700"
        fontWeight="bold"
      >
        MAIN CATEGORIES
      </Text>
      {[
        { id: 1, href: "/", title: "Home", icon: <IoMdHome /> },
        { id: 2, href: "/explore", title: "Explore", icon: <FaCompass /> },
        {
          id: 3,
          href: "/new-releases",
          title: "New Releases",
          icon: <BsCalendarEvent />,
        },
        {
          id: 4,
          href: "/top-charts",
          title: "Top Charts",
          icon: <BiNetworkChart />,
        },
        { id: 5, href: "/radio", title: "Radio", icon: <CgEditBlackPoint /> },
        {
          id: 6,
          href: "/new-releases",
          title: "New Music",
          icon: <BsFillBookmarkFill />,
        },
      ].map((item) => {
        return (
          <Link key={item.id} href={item.href}>
            <Stack
              p="13px"
              pl="25px"
              pb="15px"
              direction="row"
              _hover={{
                fontWeight: "bold",
                color: "purple.600",
                width: "95%",

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
        fontSize="13px"
        color="gray.700"
        fontWeight="bold"
      >
        YOUR MUSIC
      </Text>
      {[
        {
          id: 1,
          href: "/favourite",
          title: "Favourite",
          icon: <BsSuitHeartFill color="red" />,
        },
        { id: 2, href: "/history", title: "History", icon: <GrHistory /> },
      ].map((item) => {
        return (
          <Link key={item.id} href={item.href}>
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
        fontSize="13px"
        color="gray.700"
        fontWeight="bold"
      >
        YOUR PLAYLISTS
      </Text>
      {[
        {
          id: 1,
          href: `/playlists`,
          title: "Playlist Title #1",
          icon: <GiMusicSpell />,
        },
        {
          id: 2,
          href: "",
          title: "My Rock Collect",
          icon: <GiMusicSpell />,
        },
        { id: 3, href: "", title: "Best Music", icon: <GiMusicSpell /> },
        { id: 4, href: "", title: "Hits of 90s ", icon: <GiMusicSpell /> },
        {
          id: 5,
          href: "",
          title: "Classic Music",
          icon: <GiMusicSpell />,
        },
        {
          id: 6,
          href: "",
          title: "New Pop Music",
          icon: <GiMusicSpell />,
        },
        { id: 7, href: "", title: "Slipknot", icon: <GiMusicSpell /> },
      ].map((item) => {
        return (
          <Link
            key={item.id}
            // href={item.href}
            href="/playlists"
          >
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
      <Link href="/create-playlist">
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
      </Link>
    </Box>
  );
};

export const YourFavouriteArtist = () => {
  return (
    <Box>
      <Link href="/artists">
        <Text
          mt="40px"
          mb="20px"
          ml="25px"
          fontSize="13px"
          color="gray.700"
          fontWeight="bold"
        >
          YOUR FAVOURITE ARTIST
        </Text>
      </Link>

      {[
        {
          id: 1,
          href: `/artists/songs-by-artist/`,
          artistName: "Billie Eilish",
          artistImage: <IoMdHome />,
        },
        {
          id: 2,
          href: "",
          artistName: "Olivia Rodrigo",
          artistImage: <IoMdHome />,
        },
        {
          id: 3,
          href: "",
          artistName: "Billie Eilish",
          artistImage: <IoMdHome />,
        },
        {
          id: 4,
          href: "",
          artistName: "Olivia Rodrigo",
          artistImage: <IoMdHome />,
        },
        {
          id: 5,
          href: "",
          artistName: "Billie Eilish",
          artistImage: <IoMdHome />,
        },
        {
          id: 6,
          href: "",
          artistName: "Olivia Rodrigo",
          artistImage: <IoMdHome />,
        },
        {
          id: 7,
          href: "",
          artistName: "Billie Eilish",
          artistImage: <IoMdHome />,
        },
        {
          id: 8,
          href: "",
          artistName: "Olivia Rodrigo",
          artistImage: <IoMdHome />,
        },
        {
          id: 9,
          href: "",
          artistName: "Billie Eilish",
          artistImage: <Avatar boxSize="20px" />,
        },
        {
          id: 10,
          href: "",
          artistName: "Georger Harrison Senior",
          artistImage: <Avatar boxSize="20px" />,
        },
      ].map((item) => {
        return (
          <Link key={item.id} href={item.href}>
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
      <Link href="/recently-played">
        <Text
          mt="40px"
          mb="20px"
          ml="25px"
          fontSize="13px"
          color="gray.700"
          fontWeight="bold"
        >
          YOUR LAST SONGS
        </Text>
      </Link>
      {[
        {
          id: 1,
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          id: 2,
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
        {
          id: 3,
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          id: 4,
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
        {
          id: 5,
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          id: 6,
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
        {
          id: 7,
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          id: 8,
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
        {
          id: 9,
          href: "",
          trackTitle: "Buffer",
          artistName: "BTS",
          trackImage: <IoMdHome />,
        },
        {
          id: 10,
          href: "",
          trackTitle: "FEM",
          artistName: "Davido",
          trackImage: <IoMdHome />,
        },
      ].map((item) => {
        return (
          <Link key={item.id} href={item.href}>
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
