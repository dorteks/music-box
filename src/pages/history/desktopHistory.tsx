import Layout from "@/layouts/main";
import {
  Stack,
  Text,
  HStack,
  VStack,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { GiMusicSpell } from "react-icons/gi";
import { GrShareOption } from "react-icons/gr";
import { MdOutlineLibraryAdd } from "react-icons/md";

const DesktopHistory = () => {
  return (
    <Box>
      <Stack
        pt="20px"
        pb="20px"
        pl="10px"
        color="gray.600"
        bgColor="whiteAlpha.900"
        borderBottom="1px solid gray"
        display={["none", "none", "flex", "flex", "flex"]}
      >
        <HStack>
          <GiMusicSpell size="200px" color="black" />

          <VStack align="left" justify="center" pl="10px">
            <Text pt="10px" fontSize="35px" fontWeight="bold">
              Recently Played Songs
            </Text>
            <Stack pt="10px" direction="row" align="center" pr="40px" gap={5}>
              <Button>
                <CiPlay1 size="30px" />
                <Text pl="10px" pr="15px">
                  Play All
                </Text>
              </Button>
              <GrShareOption size="30px" />
              <BsThreeDots size="30px" />
              <FiDownload size="30px" />
            </Stack>
          </VStack>
        </HStack>
      </Stack>

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

export default DesktopHistory;

DesktopHistory.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
