import Logo from "./Logo";

function StartScreen() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-12 pt-28 text-center">
      <Logo />
      <h1 className="text-2D2D2D pt-12 text-[2.4rem] font-bold">
        Welcome to Toyan's Dictionary
      </h1>
      <p className="pt-3 text-[1.8rem] text-757575">
        Kindly input a word into our search field to discover its comprehensive
        definitions, explore various synonyms, and obtain further details,
        allowing you to enhance your knowledge of the selected term.
      </p>
    </div>
  );
}

export default StartScreen;
