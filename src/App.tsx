// https://dictionaryapi.dev/

import HomeDetails from "./components/HomeDetails";
import { DictionaryProvider } from "./contexts/DictionaryContext";
import { useDisplay } from "./contexts/DisplayContext";

function App() {
  const { font } = useDisplay();

  const serifFont = font === "serif" ? "font-serif" : "";
  const sansFont = font === "sans-serif" ? "font-sans-serif" : "";
  const monoFont = font === "mono" ? "font-mono" : "";

  return (
    <DictionaryProvider>
      <main
        className={`mx-auto min-h-[100dvh] max-w-[80rem] ${serifFont} ${sansFont} ${monoFont} `}
      >
        <HomeDetails />
      </main>
    </DictionaryProvider>
  );
}

export default App;
