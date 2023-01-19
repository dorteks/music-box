import { Box } from "@chakra-ui/react";
import Sidebar from "@/components/sidebar";

const DesktopSidebar = () => {
  return (
    <Box
      h="100%"
      bgColor="orange"
      position="fixed"
      overflowY="scroll"
      flexDirection="column"
      w={["0px", "0px", "0px", "200px", "230px"]}
      display={["none", "none", "none", "flex", "flex"]}
    >
      <Sidebar />
    </Box>
  );
};

export default DesktopSidebar;
