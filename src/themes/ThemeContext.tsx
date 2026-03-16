import React, { createContext, useState, useEffect, useContext } from "react";
import { useColorScheme } from "react-native";
import { ThemeType, ThemeContextType } from "../types/theme";
import { darkTheme, lightTheme } from "./colors";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    setTheme(systemColorScheme === "dark" ? "dark" : "light");
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const colors = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
