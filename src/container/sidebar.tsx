import SidebarComponents from "@/components/sidebarcomponent";
import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

export const SmallSidebar = () => {
  const [display, toggleDisplay] = useState("none");

  return (
    <Box display={["flex", "flex", "flex", "none", "none"]}>
      {/* open menu */}
      <Button onClick={() => toggleDisplay("flex")}>Menu</Button>

      {/* close menu */}
      <Box
        top="0"
        left="0"
        h="100vh"
        pos="fixed"
        zIndex={20}
        overflowY="auto"
        bgColor="gray.50"
        display={display}
        flexDirection="column"
        w={["100vw", "80vw", "60vw", "", ""]}
      >
        <Button onClick={() => toggleDisplay("none")}>Close</Button>
        <SidebarComponents />
      </Box>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box
      h="100%"
      w={["", "", "", "240px", "300px"]}
      position="fixed"
      overflowY="scroll"
      flexDirection="column"
      display={["none", "none", "none", "flex", "flex"]}
    >
      <SidebarComponents />
    </Box>
  );
};

export default Sidebar;
