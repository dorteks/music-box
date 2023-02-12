import { GridItem } from "@chakra-ui/react";
import React from "react";
import DesktopSidebar from "./desktop";

const LayoutSide = () => {
  return (
    <GridItem>
      <DesktopSidebar />
      {/* Mobile sidebar is used in mobile topbar */}
    </GridItem>
  );
};

export default LayoutSide;
