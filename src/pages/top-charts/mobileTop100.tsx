import Layout from "@/layouts/main";
import { Box, Button, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { BsThreeDots, BsSuitHeart } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { GiMusicSpell } from "react-icons/gi";
import { GrShareOption } from "react-icons/gr";
import { DisplaySongsExtraIcons } from "../create-playlist/mobilePlaylist";

const Top100Mobile = () => {
  return (
    <Box>
      <Stack
        pt="20px"
        pb="20px"
        pl="20px"
        bgColor="green.50"
        justify="space-between"
        maxWidth="100vw"
        display={["flex", "flex", "none", "none", "none"]}
      >
        <HStack justify="space-between">
          <GiMusicSpell size="50px" />
          <HStack gap={4} pr="20px">
            <FaPencilAlt size="25px" />
            <GrShareOption size="25px" />
            <BsThreeDots size="25px" />
          </HStack>
        </HStack>

        <HStack justify="space-between" pr="20px">
          <Text pt="10px" fontWeight="bold" fontSize="25px">
            Top 100 Naija
          </Text>
          <BsSuitHeart size="30px" />
        </HStack>
        <Text>
          Weekly update of the most played tracks in Nigeria, update on
          19.01.2023
        </Text>
        <Stack
          pt="10px"
          direction="row"
          justify="center"
          align="center"
          pr={["10px", "40px"]}
          gap={[0, 5]}
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

      <Stack
        mt="30px"
        mb="60px"
        display={["flex", "flex", "none", "none", "none"]}
      >
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
              key="id"
              direction="row"
              h="60px"
              maxWidth="100vw"
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

              {/* for song extra icons */}
              <DisplaySongsExtraIcons />
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

Top100Mobile.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Top100Mobile;
