import { useRef } from "react";
import { useDictionary } from "../contexts/DictionaryContext";

function WordHeadingSection() {
  let text: string | undefined;
  let audio: string | undefined;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { dictionaryData } = useDictionary();

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
    <section className="flex items-center justify-between px-12 pt-[4.5rem]">
      <div>
        <h1 className="text-2D2D2D text-[6.4rem] font-bold">{word}</h1>
        <p className="text-a445ed pt-3 text-[2.4rem]">{text}</p>
      </div>

      {audio && (
        <button onClick={handlePlay}>
          <img src="./icon-play.svg" alt="play" />
          <audio src={audio} ref={audioRef}></audio>
        </button>
      )}
    </section>
  );
}

export default WordHeadingSection;
