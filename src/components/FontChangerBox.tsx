import { useDisplay } from "../contexts/DisplayContext";

type FontChangerBoxProps = {
  closeNavBox: () => void;
};

function FontChangerBox({ closeNavBox }: FontChangerBoxProps) {
  const { font } = useDisplay();

  return (
    <div
      className="flex cursor-pointer items-center gap-8"
      onClick={closeNavBox}
    >
      <span className="text-2D2D2D text-[1.8rem] font-bold capitalize leading-[2.4rem]">
        {font}
      </span>
      <img src="./icon-arrow-down.svg" alt="arrow down" />
    </div>
  );
}

export default FontChangerBox;
