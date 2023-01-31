import { Box } from "@chakra-ui/react";
import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";

type props = {
  handleClick: any;
};

const Play = ({ handleClick }: props) => {
  return (
    <Box
      onClick={() => {
        handleClick();
      }}
    >
      <BsPlayCircleFill size="sm" />
    </Box>
  );
};

export default Play;
