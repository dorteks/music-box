import {
  Box,
  Button,
  HStack,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { GiMusicSpell } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
import { BsSuitHeart, BsThreeDots } from "react-icons/bs";
import { GrShareOption } from "react-icons/gr";
import { CiPlay1 } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import Layout from "@/layouts/main";
import { ReactElement } from "react";

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

        <Stack direction="row" align="center" pr="40px" gap={5}>
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
                <Tbody key="id">
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

Playlists.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Playlists;
