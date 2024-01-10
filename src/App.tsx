// https://dictionaryapi.dev/

import HomeDetails from "./components/HomeDetails";
import { DictionaryProvider } from "./contexts/DictionaryContext";

function App() {
  return (
    <DictionaryProvider>
      <main className="mx-auto min-h-[100dvh] max-w-[80rem]">
        <HomeDetails />
      </main>
    </DictionaryProvider>
  );
}

export default App;
