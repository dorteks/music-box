import { Box } from "@chakra-ui/react";
import { SmallSidebar } from "./sidebar";

export const SmallTopbar = () => {
  return (
    <Box
      h="100%"
      alignItems="center"
      display={["flex", "flex", "flex", "none", "none"]}
    >
      <SmallSidebar />

      <div>Small Top bar</div>
      <div>Small Top bar</div>
      <div>Small Top bar</div>
      <div>Small Top bar</div>
    </Box>
  );
};

export const BigTopbar = () => {
  return (
    <Box
      h="100%"
      alignItems="center"
      display={["none", "none", "none", "flex", "flex"]}
    >
      <div> Large Top bar</div>
      <div> Large Top bar</div>
      <div> Large Top bar</div>
      <div> Large Top bar</div>
    </Box>
  );
};

const Topbar = () => {
  return (
    <Box h="80px" bgColor="yellow">
      <SmallTopbar />
      <BigTopbar />
    </Box>
  );
};

export default Topbar;
