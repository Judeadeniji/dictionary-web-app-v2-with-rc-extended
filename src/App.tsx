import HomeDetails from "./components/HomeDetails";
import { DictionaryProvider } from "./contexts/DictionaryContext";
import { useDisplay } from "./contexts/DisplayContext";

function App() {
  const { font, isDarkMode } = useDisplay();

  const serifFont = font === "serif" ? "font-serif" : "";
  const sansFont = font === "sans-serif" ? "font-sans-serif" : "";
  const monoFont = font === "mono" ? "font-mono" : "";

  return (
    <DictionaryProvider>
      <main
        className={` ${serifFont} ${sansFont} ${monoFont} ${
          isDarkMode ? "bg-[#050505]" : "bg-white"
        } transition-all duration-500 `}
      >
        <HomeDetails />
      </main>
    </DictionaryProvider>
  );
}

export default App;
