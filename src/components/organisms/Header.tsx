import { useEffect, useState } from "react";
import { getNowPlaying } from "../../services/apis";
import { SongType } from "../../constants/types";

const Header = () => {
  const [musicData, setMusicData] = useState<SongType | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchSpotify = async () => {
      const song = await getNowPlaying(signal);
      if (song) {
        setMusicData(song);
      }
    };
    fetchSpotify();
    return () => controller.abort();
  }, []);
  return (
    <header className="sm:py-[3rem] py-[2rem] fixed top-0 h-[100px] md:h-[100px] sm:px-[3rem] px-[1rem] z-[10000] flex items-center justify-between w-full backdrop-blur-sm   ">
      <h1 className="font-headerFont text-[2rem] ">RO</h1>
      <div className="flex items-center gap-5">
        <div className="border-[0.8px] border-white px-5 py-1 rounded-[100px] ">
          <h1 className="text-[0.5rem] md:text-[0.8rem] font-medium font-roboto ">
            {!musicData?.title
              ? "Not Playing"
              : `${musicData?.title} - ${musicData?.artist}`}
          </h1>
        </div>
        <img
          src="/spotify.png"
          alt="spotify icon"
          className="w-[30px] h-auto "
        />
      </div>
    </header>
  );
};

export default Header;
