import { Button } from "@chakra-ui/react";
import React from "react";
import { BsPauseCircle } from "react-icons/bs";

type props = {
  handleClick: any;
};

const Pause = ({ handleClick }: props) => {
  return (
    <Button
      onClick={() => {
        handleClick();
      }}
    >
      <BsPauseCircle />
    </Button>
  );
};

export default Pause;
