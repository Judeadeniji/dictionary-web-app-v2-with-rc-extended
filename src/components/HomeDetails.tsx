import { Switch, Match, For } from "rc-extended/components"
import { useDisplay, fetchMeaning } from "../utils";
import ErrorScreen from "./ErrorScreen";
import Header from "./Header";
import InputSection from "./InputSection";
import Loader from "./Loader";
import SourceSection from "./SourceSection";
import StartScreen from "./StartScreen";
import WordHeadingSection from "./WordHeadingSection";
import WordMeaningBox from "./WordMeaningBox";
import WordMeaningItem from "./WordMeaningItem";


function HomeDetails() {
  const { isPending, isRejected, result: dictionaryData, error } = fetchMeaning("extends");
  const { isDarkMode } = useDisplay();
  const { meanings } = dictionaryData?.[0] || {};
  
  return (
    <section className="mx-auto min-h-[100dvh] max-w-[80rem] px-8">
      <Header />
      <InputSection />
      <Switch>
        <Match when={isPending}>
          <Loader />
        </Match>

        <Match when={dictionaryData && dictionaryData.length}>
          <>
            <WordHeadingSection />
            <section
              className={`mobile:px-0 mobile:pb-8 border-b px-12 pb-16 transition-all duration-500 ${
                isDarkMode ? "border-[#3a3a3a]" : "border-[#e9e9e9]"
              }`}
            >
              <For each={meanings}>
                {((meaning) => (
                  <WordMeaningBox
                    key={meaning.partOfSpeech}
                    partOfSpeech={meaning.partOfSpeech}
                  >
                    <WordMeaningBox.Definitions>
                      <For each={meaning.definitions || []}>
                        {(({definition, example}) => (
                          <WordMeaningItem key={definition.definition}>
                            <WordMeaningItem.Definition>
                              {definition}
                            </WordMeaningItem.Definition>
                            <WordMeaningItem.Example>
                              {example}
                            </WordMeaningItem.Example>
                          </WordMeaningItem>
                        ))}
                      </For>
                    </WordMeaningBox.Definitions>
                    <WordMeaningBox.Synonyms>
                      <For each={meaning.synonyms}>
                        {((synonym, index) => (<WordMeaningBox.Synonym {...{ synonym, index, len: meaning.synonyms.length }} />))}
                      </For>
                    </WordMeaningBox.Synonyms>
                    <WordMeaningBox.Antonyms>
                      <For each={meaning.antonyms}>
                        {(antonym, index) => <WordMeaningBox.Antonym {...{ antonym, index, len: meaning.antonyms.length }} />}
                      </For>
                    </WordMeaningBox.Antonyms>
                  </WordMeaningBox>
                ))}
              </For>
            </section>
            <SourceSection />
          </>
        </Match>
        <Match when={!dictionaryData}>
          <StartScreen />
        </Match>
        <Match when={error}>
          <ErrorScreen />
        </Match>
      </Switch>
    </section>
  );
}

export default HomeDetails;
