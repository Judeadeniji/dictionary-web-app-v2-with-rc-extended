import HomeDetails from "./components/HomeDetails";
import { useDisplay } from "./utils";


function App() {
  const { fontClass, isDarkMode } = useDisplay();

  return (
    <main className={`${fontClass} ${isDarkMode ? "bg-[#050505]" : "bg-white"} transition-all duration-500`}>
        <HomeDetails />
    </main>
  );
}

export default App;
