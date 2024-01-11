import { useState } from "react";
import FontChangerBox from "./FontChangerBox";
import Logo from "./Logo";
import ThemeChangerBox from "./ThemeChangerBox";
import { useDisplay } from "../contexts/DisplayContext";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { setFont, isDarkMode } = useDisplay();

  function closeNavBox() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <header className="flex justify-between px-12 py-[5.5rem] mobile:px-0">
      <Logo />

      <nav className="relative flex items-center gap-8">
        <FontChangerBox closeNavBox={closeNavBox} />
        <div className="h-full w-[0.1rem] bg-e9e9e9"></div>
        <ThemeChangerBox />

        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              className={`absolute -left-[6rem] top-[5rem] flex w-[18rem] flex-col gap-5 rounded-[1.6rem]  p-[2.4rem] text-[1.8rem] leading-[2.4rem] ${
                isDarkMode
                  ? "bg-[#1f1f1f] text-white shadow-purple-sh"
                  : "bg-white text-2D2D2D shadow-white-sh"
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [0, 1, 1.2, 1] }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="cursor-pointer font-sans-serif text-[1.8rem] font-bold leading-[2.4rem] hover:text-a445ed"
                onClick={() => {
                  closeNavBox();
                  setFont("sans-serif");
                }}
              >
                Sans Serif
              </span>
              <span
                className="cursor-pointer font-serif text-[1.8rem] font-bold leading-[2.4rem] hover:text-a445ed"
                onClick={() => {
                  closeNavBox();
                  setFont("serif");
                }}
              >
                Serif
              </span>
              <span
                className="cursor-pointer font-mono text-[1.8rem] font-bold leading-[2.4rem] hover:text-a445ed"
                onClick={() => {
                  closeNavBox();
                  setFont("mono");
                }}
              >
                Mono
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
