import { Meaning } from "../contexts/DictionaryContext";
import WordMeaningItem from "./WordMeaningItem";

function WordMeaningBox({
  antonyms,
  definitions,
  partOfSpeech,
  synonyms,
}: Meaning) {
  return (
    <div>
      <div className="flex items-center gap-8 py-16">
        <h2 className="text-2D2D2D text-[2.4rem] font-bold italic ">
          {partOfSpeech}
        </h2>
        <div className="bg-e9e9e9 h-[0.1rem] w-full"></div>
      </div>
      <div className="space-y-10">
        <h3 className="text-[2rem] text-757575">Meaning</h3>

        <ul className="space-y-[1.3rem]">
          {definitions?.map((definition) => (
            <WordMeaningItem
              key={definition.definition}
              definition={definition.definition}
              example={definition.example}
            />
          ))}
        </ul>

        {synonyms.length > 0 && (
          <div className="flex items-start gap-8 pt-16">
            <h3 className="text-[2rem] text-757575">Synonyms:</h3>
            <p className="text-a445ed text-[2rem] font-bold">
              {synonyms.map((synonym) => synonym).join(", ")}
            </p>
          </div>
        )}

        {antonyms.length > 0 && (
          <div className="flex items-start gap-8 pt-16">
            <h3 className="text-[2rem] text-757575">Antonyms:</h3>
            <p className="text-a445ed text-[2rem] font-bold hover:underline">
              {antonyms.map((antonym) => antonym).join(", ")}
            </p>
          </div>
        )}

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
