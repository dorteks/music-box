import SidebarComponents from "@/components/sidebar/sidebarcomponent";
import { Box } from "@chakra-ui/react";

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
      <SidebarComponents />
    </Box>
  );
};

export default DesktopSidebar;
