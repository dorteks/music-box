import { Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { GiMusicSpell } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
import { BsSuitHeart, BsThreeDots } from "react-icons/bs";
import { GrShareOption } from "react-icons/gr";
import { CiPlay1 } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { MdOutlineLibraryAdd } from "react-icons/md";

const Playlists = () => {
  return (
    <Box mt="30px">
      <Stack direction="row" bgColor="blue" justify="space-between">
        <HStack>
          <GiMusicSpell size="200px" />
          <VStack align="left" justify="center" pl="10px">
            <Text>PLAYLIST</Text>
            <Text pt="10px" fontSize="40px">
              Playlist Title #1
            </Text>
          </VStack>
        </HStack>

        <Stack direction="row" align="start" pr="40px" pt="35px" gap={5}>
          <Button>
            <CiPlay1 size="30px" />
            <Text pl="10px" pr="15px">
              Play All
            </Text>
          </Button>
          <FaPencilAlt size="30px" />
          <BsSuitHeart size="30px" />
          <GrShareOption size="30px" />
          <BsThreeDots size="30px" />
          <FiDownload size="30px" />
        </Stack>
      </Stack>

      <Stack mt="30px">
        {[
          { id: "1", title: "Last Last", artist: "Burna Boy", time: "02:52" },
          { id: "2", title: "Kilometre", artist: "Burna Boy", time: "02:33" },
          {
            id: "3",
            title: "Common Person",
            artist: "Burna Boy",
            time: "03:30",
          },
          {
            id: "4",
            title: "For My Hand ft. Ed Sheeran",
            artist: "Burna Boy",
            time: "02:39",
          },
        ].map((item) => {
          return (
            <HStack key="id" justifyContent="space-around">
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.artist}</Text>
              <HStack gap={2}>
                <MdOutlineLibraryAdd size="20px" />
                <GrShareOption size="20px" />
                <FiDownload size="20px" />
              </HStack>
              <Text>{item.time}</Text>
            </HStack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Playlists;
