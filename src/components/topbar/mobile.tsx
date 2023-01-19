import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import MobileSidebar from "@/layouts/main/sidebar/mobile";
import { Avatar, Box, Button, Img, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

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
        <Link href="/">
          <Text pl="10px" display={["none", "none", "flex", "none", "none"]}>
            MUSIC BOX
          </Text>
        </Link>
      </Stack>
      <Button w="180px" display={["none", "none", "flex", "none", "none"]}>
        Search
      </Button>
      <Link href="">
        <BsFillBookmarkFill size="30px" />
      </Link>
      <Link href="">
        <RiPlayListAddLine size="30px" />
      </Link>
      <Link href="">
        <AiTwotoneSetting size="30px" />
      </Link>
      <Link href="">
        <Avatar boxSize="35px" />
      </Link>
    </Box>
  );
};

export default MobileTopbar;
