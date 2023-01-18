import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import MobileSidebar from "@/layouts/main/sidebar/mobile";
import { Avatar, Box, Button, Img, Stack, Text } from "@chakra-ui/react";

const MobileTopbar = () => {
  return (
    <Box
      h="80px"
      pl="30px"
      pr="30px"
      bgColor="red"
      display={["flex", "flex", "flex", "none", "none"]}
      justifyContent="space-between"
      alignItems="center"
    >
      <MobileSidebar />
      <Stack direction="row" alignItems="center">
        <Img src="/images/musicbox.png" boxSize="30px" />
        <Text pl="10px" display={["none", "none", "flex", "none", "none"]}>
          MUSIC BOX
        </Text>
      </Stack>
      <Button w="180px" display={["none", "none", "flex", "none", "none"]}>
        Search
      </Button>
      <BsFillBookmarkFill size="30px" />
      <RiPlayListAddLine size="30px" />
      <AiTwotoneSetting size="30px" />
      <Avatar boxSize="35px" />
    </Box>
  );
};

export default MobileTopbar;
