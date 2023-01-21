import MobileTopbar from "./mobile";
import DesktopTopbar from "./desktop";
import { Box } from "@chakra-ui/react";

const Topbar = () => {
  return (
    <Box>
      <MobileTopbar />
      <DesktopTopbar />
    </Box>
  );
};

export default Topbar;
