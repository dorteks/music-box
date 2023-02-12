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
      pl="20px"
      alignItems="center"
      borderBottom="1px solid gray"
      backgroundColor="whitesmoke"
      justifyContent="space-between"
      pr={["0", "0", "0", "30px", "50px"]}
      maxWidth={["0", "0", "0", "84vw", "86vw"]}
      display={["none", "none", "none", "flex", "flex"]}
      // backgroundColor={["none", "none", "none", "yellow", "blue"]}
    >
      <HStack>
        <Box mr="10px">
          <GiMusicSpell size="30px" />
        </Box>

        <Button w="280px" bgColor="white">
          {" "}
          Search
        </Button>
      </HStack>
      <HStack gap={2}>
        {[
          {
            id: 1,
            href: "/new-releases",
            title: "Personal Release",
            icon: <BsFillBookmarkFill />,
          },
          {
            id: 2,
            href: "/create-playlist",
            title: "Create Playlist",
            icon: <RiPlayListAddLine />,
          },
          {
            id: 3,
            href: "/settings",
            title: "Settings",
            icon: <AiTwotoneSetting />,
          },
        ].map((items) => {
          return (
            <Box key={items.id}>
              <Link href={items.href}>
                <Stack alignItems="center" direction="row">
                  {items.icon}
                  <Text>{items.title} </Text>
                </Stack>
              </Link>
            </Box>
          );
        })}

        <Link href="/user">
          <Avatar boxSize="40px" src="/images/zinoleesky.jpg" />
        </Link>
      </HStack>
    </Box>
  );
};

export default DesktopTopbar;
