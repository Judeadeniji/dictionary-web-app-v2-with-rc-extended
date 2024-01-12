import React from "react"
import { Show, For } from "rc-extended/components"
import { useDisplay, type Meaning, textInput } from "../utils";

function Antonyms({ children }: { children?: React.ReactNode }) {
  return (
    <div className="mobile:pt-6 flex items-start gap-8 pt-16">
      <h3 className="mobile:text-[1.6rem] text-[2rem] text-757575">
        Antonyms:
      </h3>
      <p className="text-a445ed mobile:text-[1.6rem] flex flex-wrap text-[2rem] font-bold">
        {children}
      </p>
    </div>
  )
}
WordMeaningBox.Antonyms = Antonyms

function Antonym({ antonym, index, len }) {
  return (
    <span
      key={antonym + index}
      className="cursor-pointer pr-2 hover:underline"
      onClick={() => textInput.value = (antonym)}
    >
      {antonym + `${len - 1 === index ? "." : ", "}`}
    </span>
  )
}
WordMeaningBox.Antonym = Antonym

function Synonyms({ children }: { children?: React.ReactNode }) {
  return (
    <div className="mobile:pt-6 flex items-start gap-8 pt-16">
      <h3 className="mobile:text-[1.6rem] text-[2rem] text-757575">
        Synonyms:
      </h3>
      <p className="text-a445ed mobile:text-[1.6rem] flex flex-wrap text-[2rem] font-bold">
        {children}
      </p>
    </div>
  )
}
WordMeaningBox.Synonyms = Synonyms

function Synonym({ synonym, index, len }) {
  return (
    <span
      key={synonym + index}
      className="cursor-pointer pr-2 hover:underline"
      onClick={() => textInput.value = (synonym)}
    >
      {synonym + `${len - 1 === index ? "." : ", "}`}
    </span>
  )
}
WordMeaningBox.Synonym = Synonym

function Definitions({ children }: { children: React.ReactNode } ) {
  return (
    <ul className="space-y-[1.3rem]">
      {children}
    </ul>
  )
}
WordMeaningBox.Definitions = Definitions

function WordMeaningBox({
  partOfSpeech,
  children
}: Meaning & { children : React.ReactNode}) {
  const { isDarkMode } = useDisplay();

  return (
    <div>
      <div className="mobile:py-12 flex items-center gap-8 py-16">
        <h2
          className={`mobile:text-[1.8rem] text-[2.4rem] font-bold italic transition-all duration-500 ${isDarkMode ? "text-white" : "text-2D2D2D"
            }`}
        >
          {partOfSpeech}
        </h2>
        <div
          className={`h-[0.1rem] w-full transition-all duration-500 ${isDarkMode ? "bg-[#3a3a3a]" : "bg-e9e9e9"
            }`}
        ></div>
      </div>
      <div className="mobile:space-y-7 space-y-10">
        <h3 className="mobile:text-[1.6rem] text-[2rem] text-757575">
          Meaning
        </h3>
        {children}
      </div>
    </div>
  );
}


export default WordMeaningBox;
