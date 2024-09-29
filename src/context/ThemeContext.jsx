"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Fallback if window is not defined
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromLocalStorage());

  const toggle = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
