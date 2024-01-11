import { Meaning, useDictionary } from "../contexts/DictionaryContext";
import { useDisplay } from "../contexts/DisplayContext";
import WordMeaningItem from "./WordMeaningItem";

function WordMeaningBox({
  antonyms,
  definitions,
  partOfSpeech,
  synonyms,
}: Meaning) {
  const { isDarkMode } = useDisplay();
  const { setInputValue } = useDictionary();

  return (
    <div>
      <div className="mobile:py-12 flex items-center gap-8 py-16">
        <h2
          className={`mobile:text-[1.8rem] text-[2.4rem] font-bold italic transition-all duration-500 ${
            isDarkMode ? "text-white" : "text-2D2D2D"
          }`}
        >
          {partOfSpeech}
        </h2>
        <div
          className={`h-[0.1rem] w-full transition-all duration-500 ${
            isDarkMode ? "bg-[#3a3a3a]" : "bg-e9e9e9"
          }`}
        ></div>
      </div>
      <div className="mobile:space-y-7 space-y-10">
        <h3 className="mobile:text-[1.6rem] text-[2rem] text-757575">
          Meaning
        </h3>

        <ul className="space-y-[1.3rem]">
          {definitions?.map((definition) => (
            <WordMeaningItem
              key={definition.definition}
              definition={definition.definition}
              example={definition.example}
            />
          ))}
        </ul>

        {/* {synonyms.length > 0 && (
          <div className="mobile:pt-6 flex items-start gap-8 pt-16">
            <h3 className="mobile:text-[1.6rem] text-[2rem] text-757575">
              Synonyms:
            </h3>
            <p className="text-a445ed mobile:text-[1.6rem] text-[2rem] font-bold hover:underline">
              {synonyms.map((synonym) => synonym).join(", ")}
            </p>
          </div>
        )} */}

        {synonyms.length > 0 && (
          <div className="mobile:pt-6 flex items-start gap-8 pt-16">
            <h3 className="mobile:text-[1.6rem] text-[2rem] text-757575">
              Synonyms:
            </h3>
            <p className="text-a445ed mobile:text-[1.6rem] flex flex-wrap text-[2rem] font-bold">
              {synonyms.map((syn, index) => (
                <span
                  key={syn + index}
                  className="cursor-pointer pr-2 hover:underline"
                  onClick={() => setInputValue(syn)}
                >
                  {syn + `${synonyms.length - 1 === index ? "." : ", "}`}
                </span>
              ))}
            </p>
          </div>
        )}
        {antonyms.length > 0 && (
          <div className="mobile:pt-6 flex items-start gap-8 pt-16">
            <h3 className="mobile:text-[1.6rem] text-[2rem] text-757575">
              Antonyms:
            </h3>
            <p className="text-a445ed mobile:text-[1.6rem] flex flex-wrap text-[2rem] font-bold">
              {antonyms.map((antonym, index) => (
                <span
                  key={antonym + index}
                  className="cursor-pointer pr-2 hover:underline"
                  onClick={() => setInputValue(antonym)}
                >
                  {antonym + `${antonyms.length - 1 === index ? "." : ", "}`}
                </span>
              ))}
            </p>
          </div>
        )}

        {/* {antonyms.length > 0 && (
          <div className="mobile:pt-6 flex items-start gap-8 pt-16">
            <h3 className="mobile:text-[1.6rem] text-[2rem] text-757575">
              Antonyms:
            </h3>
            <p className="text-a445ed mobile:text-[1.6rem] text-[2rem] font-bold hover:underline">
              {antonyms.map((antonym) => antonym).join(", ")}
            </p>
          </div>
        )} */}

        {/* {antonyms.length > 0 && (
          <div className="flex items-start gap-8 pt-16">
            <h3 className="text-[2rem] text-757575">Antonyms:</h3>
            {antonyms
              .map((antonym) => (
                <p className="text-a445ed text-[2rem] font-bold hover:underline">
                  {antonym}
                </p>
              ))
              .join(", ")}
          </div>
        )} */}
      </div>
    </div>
  );
}

export default WordMeaningBox;
