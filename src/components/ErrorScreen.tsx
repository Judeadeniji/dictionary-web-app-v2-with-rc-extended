import { useDisplay } from "../contexts/DisplayContext";

function ErrorScreen() {
  const { isDarkMode } = useDisplay();
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-12 pt-28 text-center">
      <img src="./sad.png" alt="sad emoji" />
      <h1
        className={`pt-6 text-[2rem] font-bold transition-all duration-500 ${
          isDarkMode ? "text-white" : "text-2D2D2D"
        }`}
      >
        No Definitions Found
      </h1>
      <p className="text-[1.8rem] leading-[2.4rem] text-757575">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default ErrorScreen;
