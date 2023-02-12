import Layout from "@/layouts/main";
import { Stack, HStack, Img, Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { GiMusicSpell } from "react-icons/gi";
import { GrShareOption } from "react-icons/gr";
import { DisplaySongsExtraIcons } from "../playlists/mobilePlaylist";

const MobileRecentlyPlayed = () => {
  return (
    <Box>
      <Stack
        pt="20px"
        pb="20px"
        pl="20px"
        maxWidth="100vw"
        color="gray.600"
        justify="space-between"
        bgColor="whiteAlpha.900"
        borderBottom="1px solid gray"
        display={["flex", "flex", "none", "none", "none"]}
      >
        <HStack justify="space-between">
          <GiMusicSpell size="50px" color="black" />
          <HStack gap={4} pr="20px">
            <GrShareOption size="25px" />
            <BsThreeDots size="25px" />
          </HStack>
        </HStack>
        <HStack justify="space-between" pr="20px">
          <Text pt="20px" fontSize="25px" fontWeight="bold">
            Recently Played
          </Text>
        </HStack>
        <Stack
          pt="30px"
          gap={[0, 5]}
          align="center"
          direction="row"
          justify="center"
          pr={["10px", "40px"]}
        >
          <Button width={["140px", "220px"]}>
            <CiPlay1 size="30px" />
            <Text pl="10px" pr="15px">
              Play All
            </Text>
          </Button>
          <Button width={["140px", "220px"]}>
            <FiDownload size="30px" />
          </Button>
        </Stack>
      </Stack>
      <Stack mt="30px" display={["flex", "flex", "none", "none", "none"]}>
        {[
          {
            id: "1",
            title: "Tikuku",
            artist: "Candy Bleakz",
            time: "02:55",
          },
          {
            id: "2",
            title: "Kilometre",
            artist: "Burna Boy",
            time: "02:33",
          },
          {
            id: "3",
            title: "Sungba (Remix) ft. Burna Boy",
            artist: "Asake",
            time: "03:30",
          },
          {
            id: "4",
            title: "Woman",
            artist: "Simi",
            time: "02:48",
          },
          {
            id: "5",
            title: "Tikuku",
            artist: "Candy Bleakz",
            time: "02:55",
          },
          {
            id: "6",
            title: "Kilometre",
            artist: "Burna Boy",
            time: "02:33",
          },
          {
            id: "7",
            title: "Sungba (Remix) ft. Burna Boy",
            artist: "Asake",
            time: "03:30",
          },
          {
            id: "8",
            title: "Woman",
            artist: "Simi",
            time: "02:48",
          },
        ].map((item) => {
          return (
            <Stack
              key={item.id}
              direction="row"
              h="60px"
              align="center"
              justify="space-between"
              pl={["10px", "20px"]}
              pr={["10px", "30px"]}
              pb="10px"
            >
              <HStack align="center">
                <Img boxSize="50px" pr="5px" />
                <Stack direction="column" align="left">
                  <Text noOfLines={1}>{item.title}</Text>
                  <Text fontWeight="hairline" fontSize="12px">
                    {item.artist}
                  </Text>
                </Stack>
              </HStack>

              {/* extra icons for play songs */}
              <DisplaySongsExtraIcons />
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MobileRecentlyPlayed;

MobileRecentlyPlayed.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
