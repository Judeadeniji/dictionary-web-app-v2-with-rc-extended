import FontChangerBox from "./FontChangerBox";
import Logo from "./Logo";
import ThemeChangerBox from "./ThemeChangerBox";

function Header() {
  return (
    <header className="flex justify-between px-12 py-[5.5rem]">
      <Logo />

      <nav className="relative flex items-center gap-8">
        <FontChangerBox />
        <div className="bg-e9e9e9 h-full w-[0.1rem]"></div>
        <ThemeChangerBox />

        {/* <div className="text-2D2D2D shadow-white-sh absolute -left-[6rem] top-[5rem] flex w-[18rem] flex-col gap-5 rounded-[1.6rem] bg-white p-[2.4rem] text-[1.8rem] leading-[2.4rem]">
          <span className="text-2D2D2D hover:text-a445ed cursor-pointer text-[1.8rem] font-bold leading-[2.4rem]">
            Sans Serif
          </span>
          <span className="text-2D2D2D hover:text-a445ed cursor-pointer text-[1.8rem] font-bold leading-[2.4rem]">
            Serif
          </span>
          <span className="text-2D2D2D hover:text-a445ed cursor-pointer text-[1.8rem] font-bold leading-[2.4rem]">
            Mono
          </span>
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
