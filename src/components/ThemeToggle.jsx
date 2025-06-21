import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default to true (dark)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // if storedTheme is "dark" or null (no theme saved), enable dark by default
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
  onClick={toggleTheme}
  className={cn(
    "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
    "focus:outline-none",
    "sm:ml-4" // margin-left on small screens and above
  )}
>
  {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-300" />
  ) : (
    <Moon className="h-6 w-6 text-blue-900" />
  )}
</button>

  );
};
