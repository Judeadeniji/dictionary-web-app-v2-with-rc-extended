import { useFetch, usePreferredTheme } from "rc-extended/use"
import  { $computed, $watch, useSignalAction, signal } from "rc-extended/store"

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

//function fetchMeaning<T = WordData | WordData[]>() {
function fetchMeaning<T = any>() {
  const word = $computed(() => textInput.value)
  const fetcher = useFetch<T>(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.value)}`)
  
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
    const fontClass = `font-${font.value}` as const
    return {
      isDarkMode,
      fontClass,
      setFont,
      setTheme: preferredTheme.setTheme
    } as const
  }).value
}

export {
  type Definition,
  type Meaning,
  type WordData,
  fetchMeaning,
  useDisplay,
  textInput
}