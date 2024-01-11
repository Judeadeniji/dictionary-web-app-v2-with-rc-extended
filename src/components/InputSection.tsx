import { useState } from "react";
import { useDictionary } from "../contexts/DictionaryContext";

function InputSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const { setInputValue } = useDictionary();

  function searchWord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInputValue(searchTerm);
    if (searchTerm.trim() === "") {
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
    }
  }

  return (
    <>
      <form
        className={`bg-f4f4f4 flex items-center rounded-[1.6rem] border px-10  py-8 ${
          isInputEmpty
            ? "border-[#ff5252]"
            : isInputFocused
              ? "border-a445ed"
              : "border-f4f4f4"
        }`}
        onSubmit={searchWord}
      >
        <input
          type="text"
          placeholder="Search for any word…"
          className="text-2D2D2D w-full bg-transparent text-[2rem] placeholder:text-opacity-25 focus:border-none focus:outline-none"
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
