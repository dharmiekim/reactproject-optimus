import React, { createContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";

type Theme = "light" | "dark";
export type ThemeContextType = { theme: Theme; setTheme: (t: Theme) => void };

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  let initialTheme: Theme = (localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) as Theme;

  if (initialTheme !== "light" && initialTheme !== "dark") initialTheme = "light";
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`h-full w-full grid place-items-center text-[#1E293B] dark:text-[#E2E8F0]`}>
        <div
          className={`bg-[url("./assets/moon2.jpg")] bg-cover bg-center fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`bg-[url("./assets/mars4.jpg")] bg-cover bg-center fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />
        <Modal />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
