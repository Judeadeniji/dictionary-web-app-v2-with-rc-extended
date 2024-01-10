function ThemeChangerBox() {
  return (
    <div className="flex items-center gap-8">
      <div className="relative h-[2rem] w-[4rem] rounded-full bg-757575 before:absolute before:left-[0.2rem] before:top-[0.2rem] before:h-[1.6rem] before:w-[1.6rem] before:rounded-full before:bg-white"></div>
      <img src="./icon-moon.svg" alt="moon" />
    </div>
  );
}

export default ThemeChangerBox;
