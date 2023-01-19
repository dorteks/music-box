import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
  const [display, toggleDisplay] = useState("none");
  return (
    <Box display={["flex", "flex", "flex", "none", "none"]}>
      {/* open menu */}
      <Button w="30px" onClick={() => toggleDisplay("flex")}>
        <HamburgerIcon />
      </Button>

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
        w={["65vw", "45vw", "30vw", "0vw", "0vw"]}
      >
        <Button justifySelf="end" onClick={() => toggleDisplay("none")}>
          <AiOutlineClose size="30px" />{" "}
        </Button>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default MobileSidebar;
