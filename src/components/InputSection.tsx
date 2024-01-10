import { useState } from "react";
import { useDictionary } from "../contexts/DictionaryContext";

function InputSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const { setInputValue } = useDictionary();

  function searchWord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // setSearchTerm(event.currentTarget.search.value);
    setInputValue(searchTerm);
  }

  return (
    <form
      className="bg-f4f4f4 flex items-center rounded-[1.6rem] px-10 py-8"
      onSubmit={searchWord}
    >
      <input
        type="text"
        placeholder="Search for any word…"
        className="text-2D2D2D w-full bg-transparent text-[2rem] placeholder:text-opacity-25 focus:border-none focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <img src="./icon-search.svg" alt="search" />
      </button>
    </form>
  );
}

export default InputSection;
