import { useEffect, useState } from "react";
import SocialLinksContainer from "./components/SocialLinksContainer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { preferMode } from "./utils/preferMode";
import profile from "/bolt-2.jpg";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(preferMode);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="dark:bg-base flex min-h-screen flex-col items-center justify-center bg-gray-100 font-sans text-gray-900 antialiased transition-colors duration-300 dark:text-white">
      <ThemeSwitcher isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="p-8 text-center">
        <img
          src={profile}
          alt="Profile"
          className="relative mx-auto mb-4 h-32 w-32 rounded-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/150x150/cccccc/333333?text=Error";
          }}
        />
        <h1 className="from-green via-blue to-red bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
          Shubham Giri
        </h1>
        <p className="text-md dark:text-subtext-0 mb-8 text-gray-600">
          Connecting across the web!
        </p>

        <SocialLinksContainer
          isDarkMode={isDarkMode}
          setHoveredIcon={setHoveredIcon}
          hoveredIcon={hoveredIcon}
        />
      </div>
    </div>
  );
}

export default App;
