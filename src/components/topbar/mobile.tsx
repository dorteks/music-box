import Link from "next/link";
import { GiMusicSpell } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import MobileSidebar from "@/layouts/main/sidebar/mobile";
import { Avatar, Box, Button, Stack, Text } from "@chakra-ui/react";

const MobileTopbar = () => {
  return (
    <Box
      h="80px"
      maxWidth="100vw"
      alignItems="center"
      backgroundColor="whitesmoke"
      borderBottom="1px solid gray"
      justifyContent="space-between"
      pl={["20px", "30px", "30px", "0", "0"]}
      pr={["20px", "30px", "30px", "0", "0"]}
      display={["flex", "flex", "flex", "none", "none"]}
      // backgroundColor={["purple", "green", "red", "none", "none"]}
    >
      <MobileSidebar />
      <Stack direction="row" alignItems="center">
        <Link href="/">
          <GiMusicSpell size="30px" />
        </Link>
        <Link href="/">
          <Text pl="10px" display={["none", "none", "flex", "none", "none"]}>
            MUSIC BOX
          </Text>
        </Link>
      </Stack>
      <Button w="180px" display={["none", "none", "flex", "none", "none"]}>
        Search
      </Button>
      <Link href="/new-releases">
        <BsFillBookmarkFill size="30px" />
      </Link>
      <Link href="/create-playlist">
        <RiPlayListAddLine size="30px" />
      </Link>
      <Link href="/settings">
        <AiTwotoneSetting size="30px" />
      </Link>
      <Link href="/user">
        <Avatar boxSize="35px" src="/images/zinoleesky.jpg" />
      </Link>
    </Box>
  );
};

export default MobileTopbar;
