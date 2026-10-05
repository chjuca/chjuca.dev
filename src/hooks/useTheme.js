import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const darkQuery = () => window.matchMedia?.("(prefers-color-scheme: dark)");

// index.html sets data-theme before first paint when the visitor picked a
// theme; otherwise the operating system preference applies.
function currentTheme() {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "light" || explicit === "dark") return explicit;
  return darkQuery()?.matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    const query = darkQuery();
    if (!query) return undefined;
    const onChange = () => setTheme(currentTheme());
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

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
