import { useDictionary } from "../contexts/DictionaryContext";
import ErrorScreen from "./ErrorScreen";
import Header from "./Header";
import InputSection from "./InputSection";
import Loader from "./Loader";
import SourceSection from "./SourceSection";
import StartScreen from "./StartScreen";
import WordHeadingSection from "./WordHeadingSection";
import WordMeaningBox from "./WordMeaningBox";

function HomeDetails() {
  const { isLoading, dictionaryData } = useDictionary();
  console.log(dictionaryData);
  const { meanings, title } = dictionaryData?.[0] || {};
  console.log(title);
  return (
    <section>
      <Header />
      <InputSection />
      {isLoading ? (
        <Loader />
      ) : dictionaryData.length > 0 ? (
        <>
          <WordHeadingSection />
          <section className="border-e9e9e9 border-b px-12 pb-16">
            {meanings?.map((meaning) => (
              <WordMeaningBox
                key={meaning.partOfSpeech}
                antonyms={meaning.antonyms}
                definitions={meaning.definitions}
                partOfSpeech={meaning.partOfSpeech}
                synonyms={meaning.synonyms}
              />
            ))}
          </section>
          <SourceSection />
        </>
      ) : dictionaryData?.title !== "No Definitions Found" ? (
        <StartScreen />
      ) : (
        <ErrorScreen />
      )}

      {/* {isLoading ? (
        <Loader />
      ) : (
        dictionaryData?.title === "No Definitions Found" && <ErrorScreen />
      )} */}
    </section>
  );
}

export default HomeDetails;
