import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("Context must be within context provider");
  }
  return context;
};
