export type ThemeColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  toggleIcon: string;
  icon: string;
  iconInactive: string;
  accent: string;
  searchBackground: string;
  overlay: string;
};

export type ThemeType = "dark" | "light";

export type ThemeContextType = {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
};
