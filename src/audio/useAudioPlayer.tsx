import { useEffect, useState } from "react";

const useAudioPlayer = () => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;

    playing ? audio.play() : audio.pause();
  }, [playing]);

  return { playing, setPlaying };
};

export default useAudioPlayer;
