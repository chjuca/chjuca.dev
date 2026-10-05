import { useCallback, useEffect, useState } from "react";
import { LANGUAGES } from "../data/content";

const STORAGE_KEY = "lang";

// Priority: ?lang= in the URL (handy for sharing), then the saved choice,
// then the browser language.
function initialLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (LANGUAGES.includes(fromUrl)) return fromUrl;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }

  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export function useLanguage() {
  const [language, setLanguageState] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies).
    }
    // Keep a shared ?lang= link in sync so a reload doesn't revert the choice.
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", next);
      window.history.replaceState(null, "", url);
    }
    setLanguageState(next);
  }, []);

  return [language, setLanguage];
}
