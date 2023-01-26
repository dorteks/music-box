import Layout from "@/layouts/main";
import React from "react";
import DesktopSongsByArtist from "./desktop-songs-by-artist";
import MobileSongsByArtist from "./mobile-songs-by-artist";

const SongsByArtist = () => {
  return (
    <div>
      <DesktopSongsByArtist />
      <MobileSongsByArtist />
    </div>
  );
};

export default SongsByArtist;

SongsByArtist.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
