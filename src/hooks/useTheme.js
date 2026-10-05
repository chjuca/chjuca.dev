import { useCallback, useState } from "react";

const STORAGE_KEY = "theme";

// Dark is the default look; index.html applies a saved choice before first
// paint, so this only mirrors what is already on <html>.
function currentTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = useCallback(() => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies).
    }
    setTheme(next);
  }, []);

  return [theme, toggleTheme];
}
