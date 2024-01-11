import { useRef } from "react";
import { useDictionary } from "../contexts/DictionaryContext";
import { useDisplay } from "../contexts/DisplayContext";

function WordHeadingSection() {
  let text: string | undefined;
  let audio: string | undefined;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { dictionaryData } = useDictionary();
  const { isDarkMode } = useDisplay();

  const { word, phonetics } = dictionaryData?.[0] || {};

  if (phonetics) {
    phonetics.forEach((phoneticItem) => {
      if (phoneticItem.text) {
        text = phoneticItem.text;
      }
      if (phoneticItem.audio) {
        audio = phoneticItem.audio;
      }
    });
  }

  function handlePlay() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <section className="mobile:px-0 flex items-center justify-between px-12 pt-[4.5rem]">
      <div>
        <h1
          className={`mobile:text-[3.2rem] text-[6.4rem] font-bold transition-all duration-500 ${
            isDarkMode ? "text-white" : "text-2D2D2D"
          } `}
        >
          {word}
        </h1>
        <p className="text-a445ed mobile:text-[1.8rem] pt-3 text-[2.4rem]">
          {text}
        </p>
      </div>

      {audio && (
        <button onClick={handlePlay}>
          <svg className="mobile:w-[4.8rem] mobile:h-[4.8rem] h-[7.5rem] w-[7.5rem] rounded-full fill-[#a445ed] transition-all duration-300 hover:bg-[#8f19e8] hover:fill-white">
            <use href="./icon-play.svg#play"></use>
          </svg>
          <audio src={audio} ref={audioRef}></audio>
        </button>
      )}
    </section>
  );
}

export default WordHeadingSection;
