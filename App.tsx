import { ThemeProvider } from "./src/themes";
import RootLayout from "./src/components/RootLayout";

export default function App() {
  return (
    <ThemeProvider>
      <RootLayout />
    </ThemeProvider>
  );
}
