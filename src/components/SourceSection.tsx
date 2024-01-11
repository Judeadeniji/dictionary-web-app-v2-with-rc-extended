import { useDictionary } from "../contexts/DictionaryContext";
import { useDisplay } from "../contexts/DisplayContext";

function SourceSection() {
  const { dictionaryData } = useDictionary();
  const { sourceUrls } = dictionaryData?.[0] || {};

  const { isDarkMode } = useDisplay();

  return (
    <footer className="flex items-center gap-8 py-8">
      <p className="text-[1.4rem] text-757575 underline">Source</p>
      <button>
        <a
          href={sourceUrls?.[0]}
          target="_blank"
          className={`text-[1.4rem] underline transition-all duration-500 ${
            isDarkMode ? "text-white" : "text-2D2D2D"
          }`}
        >
          <span>{sourceUrls?.[0]}</span>
          <img
            className="inline-block pl-4"
            src="./icon-new-window.svg"
            alt="new window"
          />
        </a>
      </button>
    </footer>
  );
}

export default SourceSection;
