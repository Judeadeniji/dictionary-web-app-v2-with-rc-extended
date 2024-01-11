import { createContext, useContext, useState } from "react";

type DictionaryContextProps = {
  font: string;
  isDarkMode: boolean;
  setFont: (font: string) => void;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const DisplayContext = createContext<DictionaryContextProps | null>(null);

function DisplayProvider({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState<string>("sans-serif");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <DisplayContext.Provider
      value={{ font, isDarkMode, setFont, setIsDarkMode }}
    >
      {children}
    </DisplayContext.Provider>
  );
}

function useDisplay() {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error("useDisplay must be used within a DisplayProvider");
  }
  return context;
}

export { DisplayProvider, useDisplay };
