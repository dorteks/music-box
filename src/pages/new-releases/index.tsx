import { Box, Card, Text, Grid, GridItem } from "@chakra-ui/react";
import Layout from "@/layouts/main";
import { ReactElement } from "react";
import AudioPlayer from "@/audio/audioPlayer";

const PersonalReleases = () => {
  return (
    <Box pl={["10px", "20px", "20px", "20px", "20px"]}>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        alignContent="center"
        pl={["0", "0", "10px", "20px", "60px"]}
        pr={["60px", "60px", "60px", "50px", "60px"]}
        gap={3}
        mt="30px"
      >
        {[
          {
            id: 1,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 2,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 3,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 4,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 5,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 6,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 7,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 8,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 9,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 10,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 11,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
          {
            id: 12,
            image: "/images/DojaCat.png",
            title: "FLOAT",
            artiste: "KCAMP",
          },
        ].map((item) => {
          return (
            <GridItem key={item.id} pt="20px">
              <Card
                w={["160px", "210px", "210px", "250px", "230px"]}
                h={["160px", "210px", "220px", "220px", "220px"]}
                backgroundImage={item.image}
              >
                <Box w="40px" mt="30px" ml="100px">
                  <AudioPlayer song={"/davido-fem.mp3"} />{" "}
                </Box>
              </Card>

              <Card
                w={["160px", "220px", "210px", "250px", "230px"]}
                h="80px"
                justify="center"
              >
                <Text ml="20px" fontSize="18p0">
                  {item.title}
                </Text>
                <Text ml="20px" fontSize="12px">
                  {item.artiste}
                </Text>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
      {/* 
      <Stack mt="30px" overflowX="scroll">
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
              {
                id: "9",
                title: "Tikuku",
                artist: "Candy Bleakz",
                time: "02:55",
              },
              {
                id: "10",
                title: "Kilometre",
                artist: "Burna Boy",
                time: "02:33",
              },
              {
                id: "11",
                title: "Sungba (Remix) ft. Burna Boy",
                artist: "Asake",
                time: "03:30",
              },
              {
                id: "12",
                title: "Woman",
                artist: "Simi",
                time: "02:48",
              },
              {
                id: "13",
                title: "Tikuku",
                artist: "Candy Bleakz",
                time: "02:55",
              },
              {
                id: "14",
                title: "Kilometre",
                artist: "Burna Boy",
                time: "02:33",
              },
              {
                id: "15",
                title: "Sungba (Remix) ft. Burna Boy",
                artist: "Asake",
                time: "03:30",
              },
              {
                id: "16",
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
      </Stack> */}
    </Box>
  );
};

PersonalReleases.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default PersonalReleases;
