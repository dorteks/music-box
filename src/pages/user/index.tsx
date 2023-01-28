import PlaySong from "@/components/playSong";
import { Box, Text } from "@chakra-ui/react";

const User = () => {
  return (
    <Box>
      <PlaySong />
      <Text>User</Text>
      <Text>user@demo.com</Text>
      <Text>Full Profile</Text>
      <Text>Log Out</Text>
    </Box>
  );
};

export default User;
