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
      <MainItems title={"Home"} lefticon={<IoMdHome />} />
      <MainItems title={"Explore"} lefticon={<IoMdHome />} />
      <MainItems title={"New Release"} lefticon={<IoMdHome />} />
      <MainItems title={"Top Charts"} lefticon={<IoMdHome />} />
      <MainItems title={"Radio"} lefticon={<IoMdHome />} />
      <MainItems title={"New Music"} lefticon={<IoMdHome />} />
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
      <MainItems title={"Favourtite"} lefticon={<IoMdHome />} />
      <MainItems title={"History"} lefticon={<IoMdHome />} />
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
      <MainItems title={"My Rock Collect"} lefticon={<IoMdHome />} />
      <MainItems title={"Best Music"} lefticon={<IoMdHome />} />
      <MainItems title={"Hits of 90s"} lefticon={<IoMdHome />} />
      <MainItems title={"Classic Music"} lefticon={<IoMdHome />} />
      <MainItems title={"New Pop Music"} lefticon={<IoMdHome />} />
      <MainItems title={"Slipknot"} lefticon={<IoMdHome />} />
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
