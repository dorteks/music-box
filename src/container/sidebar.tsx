import SidebarComponents from "@/components/sidebarcomponent";
import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const SmallSidebar = () => {
  const [display, toggleDisplay] = useState("none");
  return (
    <Box bgColor="pink" display={["flex", "flex", "flex", "none", "none"]}>
      {/* open menu */}
      <Button onClick={() => toggleDisplay("flex")}>Menu</Button>

      {/* close menu */}
      <Box
        top="0"
        left="0"
        height="100vh"
        position="fixed"
        zIndex={20}
        overflowY="auto"
        bgColor="gray.50"
        display={display}
        flexDirection="column"
        w={["80vw", "50vw", "30vw", "0vw", "0vw"]}
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

export default Sidebar;
