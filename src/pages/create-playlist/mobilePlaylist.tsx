import {
  Box,
  Text,
  Stack,
  Button,
  HStack,
  Img,
  useOutsideClick,
} from "@chakra-ui/react";
import Layout from "@/layouts/main";
import { ReactElement } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { FaPencilAlt } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import { GrShareOption } from "react-icons/gr";
import { BsSuitHeart, BsThreeDots } from "react-icons/bs";
import { MdOutlineLibraryAdd } from "react-icons/md";
import Link from "next/link";
import React from "react";

// export const PlaylistOptions = () => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <>
//       <Button onClick={onToggle}>
//         <BsThreeDots size="20px" />
//       </Button>
//       <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
//         <Box
//           p="40px"
//           color="black"
//           mt="4"
//           bg="green.50"
//           rounded="md"
//           shadow="md"
//           height="200px"
//         >
//           <VStack align="left" gap={5}>
//             <FiDownload size="20px" />
//             <Link href="/create-playlist/playlists">
//               <BsSuitHeart size="20px" />
//             </Link>
//             <MdOutlineLibraryAdd size="20px" />
//           </VStack>
//         </Box>
//       </Slide>
//     </>
//   );
// };

export const DisplayMenus = () => {
  const ref = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      {isModalOpen ? (
        <div ref={ref} onClick={() => setIsModalOpen(false)}>
          <HStack align="left" gap={5}>
            <FiDownload
              size="20px"
              onClick={() => console.log("button clicked")}
            />
            <Link href="">
              <BsSuitHeart size="20px" />
            </Link>
            <MdOutlineLibraryAdd size="20px" />
          </HStack>
        </div>
      ) : (
        <Button onClick={() => setIsModalOpen(true)}>
          <BsThreeDots size="20px" />
        </Button>
      )}
    </>
  );
};

const MobilePLaylist = () => {
  // const [display, toggleDisplay] = useState("none");

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

              {/* <PlaylistOptions /> */}
              <DisplayMenus />
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

MobilePLaylist.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default MobilePLaylist;
