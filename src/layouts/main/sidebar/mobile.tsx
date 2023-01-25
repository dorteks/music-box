import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
  const [display, toggleDisplay] = useState("none");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutsideHandler = (e: any) => {
      if (display && !menuRef.current?.contains(e.target as Node)) {
        toggleDisplay("none");
        // console.log("clicked outside");
      }
    };
    document.body.addEventListener("mousedown", clickOutsideHandler);

    // console.log(menuRef, "menuref");
    // console.log(menuRef.current, "current menuRef");

    return () =>
      document.body.removeEventListener("mousedown", clickOutsideHandler);
  }, []);

  return (
    <Box ref={menuRef} display={["flex", "flex", "flex", "none", "none"]}>
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
        onClick={() => toggleDisplay("none")}
      >
        <Box p="20px">
          <Button w="30px">
            <HamburgerIcon />
          </Button>
        </Box>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default MobileSidebar;
