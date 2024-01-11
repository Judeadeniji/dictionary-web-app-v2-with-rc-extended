import { useDisplay } from "../contexts/DisplayContext";

function ThemeChangerBox() {
  const { isDarkMode, setIsDarkMode } = useDisplay();

  function toggleTheme() {
    setIsDarkMode((prevTheme) => !prevTheme);
  }

  return (
    <div className="flex items-center gap-8" onClick={toggleTheme}>
      <div
        className={`hover:bg-a445ed relative h-[2rem] w-[4rem] cursor-pointer rounded-full bg-757575 transition-all duration-500 before:absolute before:left-[0.2rem] before:top-[0.2rem] before:h-[1.6rem] before:w-[1.6rem] before:rounded-full before:bg-white before:transition-all before:duration-500 ${
          isDarkMode
            ? "bg-a445ed before:translate-x-[120%]"
            : "before:translate-x-0"
        } `}
      ></div>
      <img src="./icon-moon.svg" alt="moon" className="cursor-pointer" />
    </div>
  );
}

export default ThemeChangerBox;
