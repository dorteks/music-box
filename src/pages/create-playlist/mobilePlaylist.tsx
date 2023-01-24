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
  TableContainer,
} from "@chakra-ui/react";
import Layout from "@/layouts/main";
import { ReactElement } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { FaPencilAlt } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import { GrShareOption } from "react-icons/gr";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsSuitHeart, BsThreeDots } from "react-icons/bs";

const MobilePLaylist = () => {
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
          <Text pt="20px" fontSize="25px">
            Playlist Title #1
          </Text>
          <BsSuitHeart size="30px" />
        </HStack>
        <Stack
          pt="30px"
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

      <Stack mt="30px" display={["flex", "flex", "none", "none", "none"]}>
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

MobilePLaylist.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default MobilePLaylist;
