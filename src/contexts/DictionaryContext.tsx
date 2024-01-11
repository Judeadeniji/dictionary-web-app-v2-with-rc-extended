// DictionaryContext.tsx

import { createContext, useContext, useEffect, useState } from "react";

type License = {
  name: string;
  url: string;
};

export type Definition = {
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

export type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

export type WordData = {
  license: License;
  meanings: Meaning[];
  phonetic: string;
  phonetics: Phonetics[];
  sourceUrls: string[];
  word: string;
  title: string;
};

type DictionaryContextProps = {
  dictionaryData: WordData[]; // Adjust the type based on the actual API response structure
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  isLoading: boolean;
  // fetchData: (inputValue: string) => void;
};

const DictionaryContext = createContext<DictionaryContextProps | undefined>(
  undefined,
);

function DictionaryProvider({ children }: { children: React.ReactNode }) {
  const [dictionaryData, setDictionaryData] = useState<WordData[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchWord(inputValue: string) {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`,
        );
        const data = await response.json();
        console.log(data);
        setDictionaryData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchWord(inputValue);
  }, [inputValue]);

  return (
    <DictionaryContext.Provider
      value={{ dictionaryData, setInputValue, isLoading,inputValue }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
}

export { DictionaryProvider, useDictionary };
