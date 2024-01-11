import { useDictionary } from "../contexts/DictionaryContext";
import { useDisplay } from "../contexts/DisplayContext";
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
  const { isDarkMode } = useDisplay();

  const { meanings } = dictionaryData?.[0] || {};
  return (
    <section className="mx-auto min-h-[100dvh] max-w-[80rem] px-8">
      <Header />
      <InputSection />
      {isLoading ? (
        <Loader />
      ) : dictionaryData.length > 0 ? (
        <>
          <WordHeadingSection />
          <section
            className={`mobile:px-0 mobile:pb-8 border-b px-12 pb-16 transition-all duration-500 ${
              isDarkMode ? "border-[#3a3a3a]" : "border-[#e9e9e9]"
            }`}
          >
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
    </section>
  );
}

export default HomeDetails;
