import { Button } from "@chakra-ui/react";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";

type props = {
  handleClick: any;
};

const Play = ({ handleClick }: props) => {
  return (
    <Button
      onClick={() => {
        handleClick();
      }}
    >
      <BsPlayCircle />
    </Button>
  );
};

export default Play;
