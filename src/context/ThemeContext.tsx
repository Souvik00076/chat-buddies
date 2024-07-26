import { createContext, FC, useEffect, useState } from "react";
import { TContextProps, TThemeContext } from "../@types";
export const ThemeContext = createContext<TThemeContext | null>(null);
const ThemeContextProvider: FC<TContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<boolean>(() => {
    const themePreference = localStorage.getItem("theme");
    const mode = themePreference ? themePreference === "true" : false;
    return mode;
  });
  const toggleTheme = () => {
    setTheme((previous) => !previous);
  };
  const value = {
    theme,
    toggleTheme,
  };
  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", theme ? "light" : "dark");
  }, [theme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
