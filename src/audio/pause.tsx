import { Box } from "@chakra-ui/react";
import React from "react";
import { BsPauseCircleFill } from "react-icons/bs";

type props = {
  handleClick: any;
};

const Pause = ({ handleClick }: props) => {
  return (
    <Box
      onClick={() => {
        handleClick();
      }}
    >
      <BsPauseCircleFill size="sm" />
    </Box>
  );
};

export default Pause;
