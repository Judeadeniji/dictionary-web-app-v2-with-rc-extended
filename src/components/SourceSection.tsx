import { useDictionary } from "../contexts/DictionaryContext";

function SourceSection() {
  const { dictionaryData } = useDictionary();
  const { sourceUrls } = dictionaryData?.[0] || {};

  return (
    <footer className="flex items-center gap-8 pt-8">
      <p className="text-[1.4rem] text-757575 underline">Source</p>
      <button>
        <a
          href={sourceUrls?.[0]}
          target="_blank"
          className="text-2D2D2D text-[1.4rem] underline"
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
