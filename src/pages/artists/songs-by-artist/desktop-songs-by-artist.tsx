import {
  Td,
  Th,
  Tr,
  Box,
  Text,
  Stack,
  Table,
  Tbody,
  Thead,
  Button,
  HStack,
  VStack,
  Avatar,
  TableContainer,
} from "@chakra-ui/react";
import Layout from "@/layouts/main";
import { ReactElement } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { GrShareOption } from "react-icons/gr";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsSuitHeart, BsThreeDots } from "react-icons/bs";

const DesktopSongsByArtist = () => {
  return (
    <Box>
      <Box display={["none", "none", "flex", "flex", "flex"]}>
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
              pl="20px"
              pb="30px"
              height="auto"
              key="artistName"
              color="gray.600"
              direction="column"
              justify="space-between"
              bgColor="whiteAlpha.900"
              borderBottom="1px solid gray"
            >
              <Stack
                align="center"
                direction="row"
                width={["0vw", "0vw", "96vw", "77vw", "80vw"]}
              >
                <Avatar
                  src="/images/zinoleesky.jpg"
                  boxSize={["0px", "0px", "180px", "200px", "200px"]}
                />
                <VStack align="left" justify="center" pl="10px">
                  <Text fontSize="40px" pt="10px">
                    {item.artistName}{" "}
                  </Text>
                  <Text pt="10px">{item.artistInfo} </Text>
                  <Text>Country/Region - {item.artistCountry} </Text>
                  <Stack direction="row" align="center" pt="20px" gap={5}>
                    <Button>
                      <CiPlay1 size="30px" />
                      <Text pl="10px" pr="15px">
                        Play All
                      </Text>
                    </Button>
                    <BsSuitHeart size="30px" />
                    <GrShareOption size="30px" />
                    <BsThreeDots size="30px" />
                    <FiDownload size="30px" />
                  </Stack>
                </VStack>
              </Stack>
            </Stack>
          );
        })}
      </Box>

      <Stack mt="30px" display={["none", "none", "flex", "flex", "flex"]}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Title</Th>
                <Th>Artist</Th>
                <Th></Th>
                <Th>Time</Th>
              </Tr>
            </Thead>

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
                <Tbody key={item.id}>
                  <Tr>
                    <Td>{item.id}</Td>
                    <Td>{item.title}</Td>
                    <Td>{item.artist} </Td>
                    <Td>
                      <HStack gap={2}>
                        <MdOutlineLibraryAdd size="20px" />
                        <GrShareOption size="20px" />
                        <FiDownload size="20px" />
                      </HStack>
                    </Td>
                    <Td> {item.time} </Td>
                  </Tr>
                </Tbody>
              );
            })}
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
};

DesktopSongsByArtist.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default DesktopSongsByArtist;
