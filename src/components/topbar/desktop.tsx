import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";

const DesktopTopbar = () => {
  return (
    <Box
      h="80px"
      pr="20px"
      pl="20px"
      bgColor="red"
      alignItems="center"
      justifyContent="space-between"
      display={["none", "none", "none", "flex", "flex"]}
    >
      <HStack>
        <Img src="/images/musicbox.png" alt="" boxSize="25px" mr="10px" />
        <Button w="280px">Search</Button>
      </HStack>
      <HStack>
        {[
          { title: "Personal Release", icon: <BsFillBookmarkFill /> },
          { title: "Create Playlist", icon: <RiPlayListAddLine /> },
          { title: "Settings", icon: <AiTwotoneSetting /> },
        ].map((items) => {
          return (
            <Box>
              <Stack alignItems="center" direction="row">
                {items.icon}
                <Text>{items.title} </Text>
              </Stack>
            </Box>
          );
        })}

        <Avatar boxSize="35px" />
      </HStack>
    </Box>
  );
};

export default DesktopTopbar;
