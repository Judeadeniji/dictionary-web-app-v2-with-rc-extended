import { useDisplay } from "../contexts/DisplayContext";

type FontChangerBoxProps = {
  closeNavBox: () => void;
};

function FontChangerBox({ closeNavBox }: FontChangerBoxProps) {
  const { font, isDarkMode } = useDisplay();

  return (
    <div
      className="flex cursor-pointer items-center gap-8"
      onClick={closeNavBox}
    >
      <span
        className={`mobile:text-[1.4rem] text-[1.8rem] font-bold capitalize leading-[2.4rem] transition-all duration-500 ${
          isDarkMode ? "text-white" : "text-2D2D2D"
        }`}
      >
        {font}
      </span>
      <img src="./icon-arrow-down.svg" alt="arrow down" />
    </div>
  );
}

export default FontChangerBox;
