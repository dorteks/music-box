import { Box } from "@chakra-ui/react";
import DesktopTopbar from "./desktop";
import MobileTopbar from "./mobile";

const Topbar = () => {
  return (
    <Box>
      <MobileTopbar />
      <DesktopTopbar />
    </Box>
  );
};

export default Topbar;
