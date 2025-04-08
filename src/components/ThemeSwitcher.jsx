import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="absolute top-4 right-4 rounded-full bg-gray-200 p-2 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none dark:bg-[#313244] dark:focus:ring-[#cba6f7] dark:focus:ring-offset-[#1e1e2e]"
    >
      {isDarkMode ? (
        <Sun className="text-yellow h-6 w-6" />
      ) : (
        <Moon className="text-blue h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
