import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset.theme;
    window.history.replaceState(null, "", "/");
  });

  it("renders the CV content in Spanish", () => {
    localStorage.setItem("lang", "es");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Carlos Juca" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Experiencia" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /MapVX \(Lazarillo\)/ })).toBeInTheDocument();
    expect(screen.getByText("reduciendo el tiempo de respuesta de 5.000 ms a 900 ms").tagName).toBe("STRONG");
    expect(screen.getByRole("link", { name: "Descargar CV" })).toHaveAttribute(
      "href",
      "/cv/Carlos-Juca-Fullstack-ES.pdf",
    );
    expect(screen.getAllByRole("link", { name: /chjuca99@gmail\.com|Contactar/ })[0]).toHaveAttribute(
      "href",
      "mailto:chjuca99@gmail.com",
    );
    expect(document.documentElement.lang).toBe("es");
  });

  it("switches language and remembers the choice", () => {
    localStorage.setItem("lang", "es");
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Ver el sitio en inglés" }));

    expect(screen.getByRole("heading", { level: 2, name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/cv/Carlos-Juca-Fullstack-EN.pdf",
    );
    expect(document.documentElement.lang).toBe("en");
    expect(localStorage.getItem("lang")).toBe("en");
  });

  it("uses the ?lang= query parameter over the saved language", () => {
    localStorage.setItem("lang", "es");
    window.history.replaceState(null, "", "/?lang=en");
    render(<App />);

    expect(screen.getByRole("heading", { level: 2, name: "Experience" })).toBeInTheDocument();
  });

  it("toggles dark mode and persists it", () => {
    localStorage.setItem("lang", "en");
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(screen.getByRole("button", { name: "Switch to light mode" })).toBeInTheDocument();
  });
});
