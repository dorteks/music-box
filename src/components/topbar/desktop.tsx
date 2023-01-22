import Link from "next/link";
import { GiMusicSpell } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Avatar, Box, Button, HStack, Stack, Text } from "@chakra-ui/react";

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
        <Box mr="10px">
          <GiMusicSpell size="30px" />
        </Box>

        <Button w="280px">Search</Button>
      </HStack>
      <HStack>
        {[
          { href: "", title: "Personal Release", icon: <BsFillBookmarkFill /> },
          {
            href: "",
            title: "Create Playlist",
            icon: <RiPlayListAddLine />,
          },
          { href: "", title: "Settings", icon: <AiTwotoneSetting /> },
        ].map((items) => {
          return (
            <Box key={""}>
              <Link href={items.href}>
                <Stack alignItems="center" direction="row">
                  {items.icon}
                  <Text>{items.title} </Text>
                </Stack>
              </Link>
            </Box>
          );
        })}

        <Avatar boxSize="35px" />
      </HStack>
    </Box>
  );
};

export default DesktopTopbar;
