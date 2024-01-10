function ErrorScreen() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-12 pt-28 text-center">
      <img src="./sad.png" alt="sad emoji" />
      <h1 className="text-2D2D2D pt-6 text-[2rem] font-bold">
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
