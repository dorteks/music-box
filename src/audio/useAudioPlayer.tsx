import { useEffect, useState } from "react";

const useAudioPlayer = () => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;

    audio.addEventListener("loadeddata", () => {});

    playing ? audio.play() : audio.pause();

    return () => {
      audio.removeEventListener("loadeddata", () => {});
    };
  }, [playing]);

  return { playing, setPlaying };
};

export default useAudioPlayer;
