import Layout from "@/layouts/main";
import {
  Box,
  Img,
  Text,
  Stack,
  Avatar,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { GrShareOption } from "react-icons/gr";
import { BsThreeDots, BsSuitHeart } from "react-icons/bs";
import { DisplaySongsExtraIcons } from "@/pages/playlists/mobilePlaylist";

const MobileSongsByArtist = () => {
  return (
    <Box>
      <Box>
        <Stack
          maxWidth="100vw"
          display={["flex", "flex", "none", "none", "none"]}
        >
          {[
            {
              artistName: "Zinoleesky",
              artistInfo:
                " Oniyide Azeez, prominently known as Zinoleesky, was born on November 21, 1995, in Lagos State, Nigeria. He started schooling at Lively Kiddies Nursery and Primary School, Agege Lagos, Nigeria. After completing elementary school, he proceeded to Boys Secondary School, Agege, Lagos, Nigeria where is obtained his West African Examination Certificate. Zinoleesky developed a passion for music at a tender age. In his words, he stated that his love for music became stronger after being followed by Kizz Daniel on Instagram. This was a result of the rap video he dropped on Instagram. Zinoleesky turned down Davido’s offer to sign him into DMW. Naira Marley later signed him into Marlian music in December 2019. He was signed alongside Mohbad, CBlack, and Fabian Blu. The four artists were brought on stage at the Marlian Fest. in Eko Hotel and Suites on December 31st, 2019.",
              artistCountry: "Nigeria",
            },
          ].map((item) => {
            return (
              <Stack
                key="artistName"
                pl="10px"
                pb="30px"
                height="auto"
                direction="column"
                bgColor="green.50"
                justify="space-between"
              >
                <Stack
                  pt="20px"
                  align="center"
                  direction="column"
                  width={["95vw", "95vw", "0vw", "0vw", "0vw"]}
                >
                  <HStack justify="space-between" gap={15}>
                    <Box pr="50px">
                      <Avatar boxSize="100px" src="/images/zinoleesky.jpg" />
                    </Box>
                    <HStack gap={2}>
                      <GrShareOption size="25px" />
                      <BsThreeDots size="25px" />
                      <BsSuitHeart size="30px" />
                    </HStack>
                  </HStack>

                  <Text pt="10px" fontSize="25px" fontWeight="bold">
                    {item.artistName}
                  </Text>

                  <VStack align="left" justify="center" pl="10px">
                    <Text pt="10px">{item.artistInfo} </Text>
                    <Text pt="10px">
                      Country/Region - {item.artistCountry}{" "}
                    </Text>
                  </VStack>
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
              </Stack>
            );
          })}
        </Stack>
      </Box>

      <Stack mt="30px" display={["flex", "flex", "none", "none", "none"]}>
        {[
          {
            id: "1",
            title: "Personal",
            artist: "Zeenoleesky",
            time: "02:23",
          },
          {
            id: "2",
            title: "Call of Duty",
            artist: "Zeenoleesky",
            time: "02:24",
          },
          {
            id: "3",
            title: "Last Time ft. Omah Lay",
            artist: "Zeenoleesky",
            time: "02:33",
          },
          {
            id: "4",
            title: "Personal",
            artist: "Zeenoleesky",
            time: "02:23",
          },
          {
            id: "5",
            title: "Odinaka",
            artist: "Zeenoleesky",
            time: "02:59",
          },
          {
            id: "6",
            title: "Yan Yan Yan",
            artist: "Zeenoleesky",
            time: "02:11",
          },
          {
            id: "7",
            title: "Many Roads ft. Arya Starr",
            artist: "Zeenoleesky",
            time: "02:35",
          },
          {
            id: "8",
            title: "Loving You",
            artist: "Zeenoleesky",
            time: "02:05",
          },
          {
            id: "9",
            title: "Run it up",
            artist: "Zeenoleesky",
            time: "02:36",
          },
        ].map((item) => {
          return (
            <Stack
              key="id"
              h="60px"
              pb="10px"
              align="center"
              direction="row"
              pl={["10px", "20px"]}
              pr={["10px", "30px"]}
              justify="space-between"
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

export default MobileSongsByArtist;

MobileSongsByArtist.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
