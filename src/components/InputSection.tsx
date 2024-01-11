import { useEffect, useState } from "react";
import { useDictionary } from "../contexts/DictionaryContext";
import { useDisplay } from "../contexts/DisplayContext";

function InputSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const { setInputValue, inputValue } = useDictionary();
  const { isDarkMode } = useDisplay();

  function searchWord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      setIsInputEmpty(true);
    } else {
      setInputValue(searchTerm);
      setIsInputEmpty(false);
    }
  }

  useEffect(() => {
    setSearchTerm(inputValue);
  }, [inputValue]);

  return (
    <>
      <form
        className={` flex items-center rounded-[1.6rem] border px-10 py-8  ${
          isDarkMode ? "bg-[#1f1f1f]" : "bg-f4f4f4"
        } transition-all duration-500 ${
          isInputEmpty
            ? "border-[#ff5252]"
            : isInputFocused
              ? "border-a445ed"
              : "border-transparent"
        }`}
        onSubmit={searchWord}
      >
        <input
          type="text"
          placeholder="Search for any word…"
          className={`w-full bg-transparent text-[2rem] transition-[color] duration-500 placeholder:text-opacity-25 focus:border-none focus:outline-none ${
            isDarkMode ? "text-white" : "text-2D2D2D"
          }`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        <button type="submit">
          <img src="./icon-search.svg" alt="search" />
        </button>
      </form>
      {isInputEmpty && (
        <p className="text-[2rem] text-[#ff5252]">Whoops, can’t be empty…</p>
      )}
    </>
  );
}

export default InputSection;
