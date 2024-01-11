import { useState } from "react";
import FontChangerBox from "./FontChangerBox";
import Logo from "./Logo";
import ThemeChangerBox from "./ThemeChangerBox";
import { useDisplay } from "../contexts/DisplayContext";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { setFont, isDarkMode } = useDisplay();

  function closeNavBox() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <header className="mobile:px-0 flex justify-between px-12 py-[5.5rem]">
      <Logo />

      <nav className="relative flex items-center gap-8">
        <FontChangerBox closeNavBox={closeNavBox} />
        <div className="bg-e9e9e9 h-full w-[0.1rem]"></div>
        <ThemeChangerBox />

        {isNavOpen && (
          <div
            className={`absolute -left-[6rem] top-[5rem] flex w-[18rem] flex-col gap-5 rounded-[1.6rem]  p-[2.4rem] text-[1.8rem] leading-[2.4rem] ${
              isDarkMode
                ? "shadow-purple-sh bg-[#1f1f1f] text-white"
                : "shadow-white-sh text-2D2D2D bg-white"
            }`}
          >
            <span
              className="hover:text-a445ed font-sans-serif cursor-pointer text-[1.8rem] font-bold leading-[2.4rem]"
              onClick={() => {
                closeNavBox();
                setFont("sans-serif");
              }}
            >
              Sans Serif
            </span>
            <span
              className="hover:text-a445ed cursor-pointer font-serif text-[1.8rem] font-bold leading-[2.4rem]"
              onClick={() => {
                closeNavBox();
                setFont("serif");
              }}
            >
              Serif
            </span>
            <span
              className="hover:text-a445ed cursor-pointer font-mono text-[1.8rem] font-bold leading-[2.4rem]"
              onClick={() => {
                closeNavBox();
                setFont("mono");
              }}
            >
              Mono
            </span>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
