import React, { useEffect, useState } from "react";
import { Show } from "rc-extended/components"
import { useSignal, $computed } from "rc-extended/store"
import { useDisplay, textInput } from "../utils";


function InputSection() {
  const { isDarkMode } = useDisplay();
  const [inputValue, setInputValue] = useSignal(textInput)
  const [isInputFocused, setIsInputFocused] = useState(false);

  function clearText(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    setInputValue("")
  }

  return (
    <>
      <form
        className={` flex items-center rounded-[1.6rem] border px-10 py-8  ${
          isDarkMode ? "bg-[#1f1f1f]" : "bg-f4f4f4"
        } transition-all duration-500 ${
            isInputFocused
              ? "border-a445ed"
              : "border-transparent"
        }`}
      >
        <input
          type="text"
          placeholder="Search for any word…"
          className={`w-full bg-transparent text-[2rem] transition-[color] duration-500 placeholder:text-opacity-25 focus:border-none focus:outline-none ${
            isDarkMode ? "text-white" : "text-2D2D2D"
          }`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        <button type="button" className="p-0" onClick={clearText}>
          <span className="font-bold text-3xl text-[#a445ed]">X</span>
        </button>
      </form>
    </>
  );
}

export default InputSection;
