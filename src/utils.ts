import { useFetch, usePreferredTheme } from "rc-extended/use"
import  { $computed, $signal, $watch, useSignalAction, signal } from "rc-extended/store"

type License = {
  name: string;
  url: string;
};

type Definition = {
  antonyms?: string[];
  definition: string;
  example: string;
  synonyms?: string[];
};

type Phonetics = {
  audio: string;
  license: License;
  sourceUrl: string;
  text: string;
};

type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

type WordData = {
  license: License;
  meanings: Meaning[];
  phonetic: string;
  phonetics: Phonetics[];
  sourceUrls: string[];
  word: string;
  title: string;
};

type FontName = "serif" | "sans-serif" | "mono"

// let's have a shared input signal in which we'll derive some computed properties in our app
const textInput = signal("")

function fetchMeaning() {
  const word = $computed(() => textInput.value)
  const fetcher = useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.value)}`)
  
  $watch(word, () => {
    if (!Boolean(word.value.trim())) return;
   // fetcher.abort()
    fetcher.error = null
    fetcher.invalidate()
  })
  
  return fetcher
}

const font = signal<FontName>("sans-serif")

function useDisplay() {
  const preferredTheme = usePreferredTheme({})
  const setFont = useSignalAction(font)
  
  // use $computed to track all signal change and return a derived state 
  return $computed(() => {
    const isDarkMode = preferredTheme.theme === "dark"
    const fontClass = `font-${font.value}`
    return {
      isDarkMode,
      fontClass,
      setFont,
      getTheme: () => preferredTheme.theme,
      setTheme: preferredTheme.setTheme
    }
  }).value
}

export {
  Definition,
  Meaning,
  WordData,
  fetchMeaning,
  useDisplay,
  textInput
}