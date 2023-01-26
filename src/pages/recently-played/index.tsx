import Layout from "@/layouts/main";
import React from "react";
import DesktopRecentlyPlayed from "./desktop-rently-played";
import MobileRecentlyPlayed from "./mobile-recently-played";

const LastPlayed = () => {
  return (
    <div>
      <DesktopRecentlyPlayed />
      <MobileRecentlyPlayed />
    </div>
  );
};

export default LastPlayed;

LastPlayed.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
