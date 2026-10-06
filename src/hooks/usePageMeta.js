import { useEffect } from "react";
import { useLocation } from "react-router";
import { SITE_URL } from "../data/content";

// Keeps the document title, description and canonical URL in sync with the page.
export function usePageMeta({ title, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${SITE_URL}${pathname}`);
  }, [title, description, pathname]);
}
