import { Box, Img, Text, Stack, Button } from "@chakra-ui/react";
import { SlArrowRight } from "react-icons/sl";
import { IoMdHome } from "react-icons/io";

export const MainItems = (props: {
  title: React.ReactNode;
  lefticon: React.ReactNode;
}) => {
  return (
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
          {props.lefticon}
        </Box>
        <Text
          fontWeight="bold"
          fontSize="12px"
          width="100px"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {props.title}
        </Text>
      </Stack>
      <Stack pr={["0", "0", "0", "20px", "0"]}>
        <Box p="5px">
          <SlArrowRight size="10px" />
        </Box>
      </Stack>
    </Stack>
  );
};

export const MusicBoxHeader = () => {
  return (
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
        { title: "Home", icon: <IoMdHome /> },
        { title: "Explore", icon: <IoMdHome /> },
        { title: "Newss Release", icon: <IoMdHome /> },
        { title: "Top Charts", icon: <IoMdHome /> },
        { title: "Radio", icon: <IoMdHome /> },
        { title: "New Music", icon: <IoMdHome /> },
      ].map((item) => {
        return (
          <Stack
            key={""}
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
        { title: "Favourtie", icon: <IoMdHome /> },
        { title: "History", icon: <IoMdHome /> },
      ].map((item) => {
        return (
          <Stack
            key={""}
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
        { title: "My Rock Collect", icon: <IoMdHome /> },
        { title: "Best Music", icon: <IoMdHome /> },
        { title: "Gits of 90s ", icon: <IoMdHome /> },
        { title: "Classic Music", icon: <IoMdHome /> },
        { title: "New Pop Music", icon: <IoMdHome /> },
        { title: "Slipknot", icon: <IoMdHome /> },
      ].map((item) => {
        return (
          <Stack
            key={""}
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
      <MainItems title={"Billie Eilish"} lefticon={<IoMdHome />} />
      <MainItems title={"Olivia Rodrigo"} lefticon={<IoMdHome />} />
      <MainItems title={"Billie Eilish"} lefticon={<IoMdHome />} />
      <MainItems title={"Olivia Rodrigo"} lefticon={<IoMdHome />} />
      <MainItems title={"Billie Eilish"} lefticon={<IoMdHome />} />
      <MainItems title={"Olivia Rodrigo"} lefticon={<IoMdHome />} />
      <MainItems title={"Billie Eilish"} lefticon={<IoMdHome />} />
      <MainItems title={"Olivia Rodrigo"} lefticon={<IoMdHome />} />
      <MainItems title={"Billie Eilish"} lefticon={<IoMdHome />} />
      <MainItems title={"Georger Harrison Senior"} lefticon={<IoMdHome />} />
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
      <MainItems title={"Buffer - BTS"} lefticon={<IoMdHome />} />
      <MainItems title={"Davido - FEM"} lefticon={<IoMdHome />} />
      <MainItems title={"Buffer - BTS"} lefticon={<IoMdHome />} />
      <MainItems title={"Davido - FEM"} lefticon={<IoMdHome />} />
      <MainItems title={"Buffer - BTS"} lefticon={<IoMdHome />} />
      <MainItems title={"Davido - FEM"} lefticon={<IoMdHome />} />
      <MainItems title={"Buffer - BTS"} lefticon={<IoMdHome />} />
      <MainItems title={"Davido - FEM"} lefticon={<IoMdHome />} />
      <MainItems title={"Buffer - BTS"} lefticon={<IoMdHome />} />
      <MainItems title={"Davido - FEM"} lefticon={<IoMdHome />} />
      <MainItems title={"Buffer - BTS"} lefticon={<IoMdHome />} />
      <MainItems title={"Davido - FEM"} lefticon={<IoMdHome />} />
    </Box>
  );
};
